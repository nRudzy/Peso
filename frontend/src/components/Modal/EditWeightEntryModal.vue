<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">Modifier l'entrée de poids</h3>
        <button 
          @click="closeModal"
          class="modal-close-btn"
          data-testid="modal-close-button"
        >
          ✕
        </button>
      </div>
      
      <form @submit.prevent="submitForm" class="modal-form">
        <div class="form-group">
          <label for="edit-weight" class="form-label">
            Poids ({{ weightUnit }})
          </label>
          <input
            id="edit-weight"
            data-testid="edit-weight-input"
            v-model.number="formData.weight"
            type="number"
            step="0.1"
            min="0"
            max="500"
            required
            class="form-input"
            :placeholder="`Ex: 70.5 ${weightUnit}`"
          >
        </div>
        
        <div class="form-group">
          <label for="edit-date" class="form-label">
            Date
          </label>
          <input
            id="edit-date"
            data-testid="edit-date-input"
            v-model="formData.date"
            type="datetime-local"
            required
            class="form-input"
          >
        </div>
        
        <div class="form-group">
          <label for="edit-comment" class="form-label">
            Commentaire (optionnel)
          </label>
          <textarea
            id="edit-comment"
            data-testid="edit-comment-input"
            v-model="formData.comment"
            rows="3"
            class="form-textarea"
            placeholder="Ex: Poids du matin, après le sport..."
          />
        </div>
        
        <!-- BMI Calculation Display -->
        <div
          v-if="bmiData"
          class="bmi-section"
        >
          <h4 class="text-md font-medium text-gray-800 mb-2">
            Calcul IMC
          </h4>
          <div class="bmi-grid">
            <div class="bmi-item">
              <span class="bmi-label">IMC</span>
              <span class="bmi-value">{{ bmiData.bmi }}</span>
            </div>
            <div class="bmi-item">
              <span class="bmi-label">Catégorie</span>
              <span
                class="bmi-category"
                :class="bmiData.categoryClass"
              >
                {{ bmiData.category }}
              </span>
            </div>
            <div class="bmi-item">
              <span class="bmi-label">Poids idéal</span>
              <span class="bmi-value">{{ bmiData.idealRange }}</span>
            </div>
          </div>
        </div>
        
        <div class="modal-actions">
          <button
            type="button"
            @click="closeModal"
            class="btn-secondary"
            :disabled="loading"
          >
            Annuler
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="btn-primary"
            data-testid="edit-submit-button"
          >
            <span
              v-if="loading"
              class="loading-spinner-small"
            />
            {{ loading ? 'Modification...' : 'Modifier' }}
          </button>
        </div>
      </form>
      
      <div
        v-if="error"
        class="error-message"
        data-testid="edit-error-message"
      >
        <p class="text-red-600">
          {{ error }}
        </p>
      </div>
      
      <div
        v-if="success"
        class="success-message"
        data-testid="edit-success-message"
      >
        <p class="text-green-600">
          {{ success }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { weightEntriesApi } from '@/services/api'
import { calculate_bmi, get_bmi_category, get_healthy_weight_range } from '@/utils/bmi-calculator'

export default {
  name: 'EditWeightEntryModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    entry: {
      type: Object,
      default: null
    },
    weightUnit: {
      type: String,
      default: 'kg'
    },
    userHeight: {
      type: Number,
      default: null
    }
  },
  emits: ['close', 'entry-updated'],
  setup(props, { emit }) {
    const formData = ref({
      weight: null,
      date: '',
      comment: ''
    })
    
    const loading = ref(false)
    const error = ref(null)
    const success = ref(null)
    
    // BMI calculation
    const bmiData = computed(() => {
      if (!formData.value.weight || !props.userHeight) {
        return null
      }
      
      try {
        const bmi = calculate_bmi(formData.value.weight, props.userHeight)
        const category = get_bmi_category(bmi)
        const [minWeight, maxWeight] = get_healthy_weight_range(props.userHeight)
        
        const categoryClass = {
          'Underweight': 'text-yellow-600',
          'Normal weight': 'text-green-600',
          'Overweight': 'text-orange-600',
          'Obese': 'text-red-600'
        }[category] || 'text-gray-600'
        
        return {
          bmi: bmi.toFixed(1),
          category,
          categoryClass,
          idealRange: `${minWeight} - ${maxWeight} ${props.weightUnit}`
        }
      } catch (err) {
        console.error('BMI calculation error:', err)
        return null
      }
    })
    
    // Initialize form data when entry changes
    watch(() => props.entry, (newEntry) => {
      if (newEntry) {
        formData.value = {
          weight: newEntry.weight,
          date: new Date(newEntry.date).toISOString().slice(0, 16),
          comment: newEntry.comment || ''
        }
        error.value = null
        success.value = null
      }
    }, { immediate: true })
    
    const submitForm = async () => {
      if (!props.entry) return
      
      loading.value = true
      error.value = null
      success.value = null
      
      try {
        const response = await weightEntriesApi.updateWeightEntry(props.entry.id, {
          weight: formData.value.weight,
          date: new Date(formData.value.date).toISOString(),
          comment: formData.value.comment || undefined
        })
        
        success.value = 'Entrée de poids modifiée avec succès !'
        
        // Emit event for parent component
        emit('entry-updated', response.data)
        
        // Close modal after a short delay
        setTimeout(() => {
          closeModal()
        }, 1500)
        
      } catch (err) {
        error.value = err.message || 'Erreur lors de la modification'
        console.error('Error updating weight entry:', err)
      } finally {
        loading.value = false
      }
    }
    
    const closeModal = () => {
      emit('close')
    }
    
    return {
      formData,
      loading,
      error,
      success,
      bmiData,
      submitForm,
      closeModal
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50;
}

.modal-content {
  @apply bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto;
}

.modal-header {
  @apply flex justify-between items-center p-6 border-b border-gray-200;
}

.modal-title {
  @apply text-lg font-semibold text-gray-900;
}

.modal-close-btn {
  @apply text-gray-400 hover:text-gray-600 text-xl font-bold;
}

.modal-form {
  @apply p-6 space-y-4;
}

.form-group {
  @apply space-y-1;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input,
.form-textarea {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.form-textarea {
  @apply resize-none;
}

.bmi-section {
  @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
}

.bmi-grid {
  @apply grid grid-cols-3 gap-4;
}

.bmi-item {
  @apply text-center;
}

.bmi-label {
  @apply block text-xs text-gray-600 mb-1;
}

.bmi-value {
  @apply block text-lg font-semibold text-gray-900;
}

.bmi-category {
  @apply block text-lg font-semibold;
}

.modal-actions {
  @apply flex gap-3 pt-4;
}

.btn-primary {
  @apply flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
  @apply flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed;
}

.loading-spinner-small {
  @apply inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2;
}

.error-message {
  @apply mx-6 mb-6 p-4 bg-red-50 border border-red-200 rounded-md;
}

.success-message {
  @apply mx-6 mb-6 p-4 bg-green-50 border border-green-200 rounded-md;
}
</style>
