<template>
  <div class="weight-entry-form">
    <div class="form-header">
      <h3 class="text-lg font-semibold text-gray-900">Nouvelle Entrée de Poids</h3>
    </div>
    
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="form-group">
        <label for="weight" class="block text-sm font-medium text-gray-700 mb-1">
          Poids ({{ weightUnit }})
        </label>
        <input
          id="weight"
          v-model.number="formData.weight"
          type="number"
          step="0.1"
          min="0"
          max="500"
          required
          class="form-input"
          :placeholder="`Ex: 70.5 ${weightUnit}`"
        />
      </div>
      
      <div class="form-group">
        <label for="date" class="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          id="date"
          v-model="formData.date"
          type="datetime-local"
          required
          class="form-input"
        />
      </div>
      
      <div class="form-group">
        <label for="comment" class="block text-sm font-medium text-gray-700 mb-1">
          Commentaire (optionnel)
        </label>
        <textarea
          id="comment"
          v-model="formData.comment"
          rows="3"
          class="form-textarea"
          placeholder="Ex: Poids du matin, après le sport..."
        ></textarea>
      </div>
      
      <!-- BMI Calculation Display -->
      <div v-if="bmiData" class="bmi-section">
        <h4 class="text-md font-medium text-gray-800 mb-2">Calcul IMC</h4>
        <div class="bmi-grid">
          <div class="bmi-item">
            <span class="bmi-label">IMC</span>
            <span class="bmi-value">{{ bmiData.bmi }}</span>
          </div>
          <div class="bmi-item">
            <span class="bmi-label">Catégorie</span>
            <span class="bmi-category" :class="bmiData.categoryClass">
              {{ bmiData.category }}
            </span>
          </div>
          <div class="bmi-item">
            <span class="bmi-label">Poids idéal</span>
            <span class="bmi-value">{{ bmiData.idealRange }}</span>
          </div>
        </div>
      </div>
      
      <div class="form-actions">
        <button
          type="submit"
          :disabled="loading"
          class="btn-primary"
        >
          <span v-if="loading" class="loading-spinner-small"></span>
          {{ loading ? 'Enregistrement...' : 'Enregistrer' }}
        </button>
        
        <button
          type="button"
          @click="resetForm"
          class="btn-secondary"
          :disabled="loading"
        >
          Réinitialiser
        </button>
      </div>
    </form>
    
    <div v-if="error" class="error-message">
      <p class="text-red-600">{{ error }}</p>
    </div>
    
    <div v-if="success" class="success-message">
      <p class="text-green-600">{{ success }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { calculate_bmi, get_bmi_category, get_healthy_weight_range } from '@/utils/bmi-calculator'

export default {
  name: 'WeightEntryForm',
  props: {
    weightUnit: {
      type: String,
      default: 'kg'
    },
    userHeight: {
      type: Number,
      default: null
    }
  },
  emits: ['entry-created'],
  setup(props, { emit }) {
    const formData = ref({
      weight: null,
      date: new Date().toISOString().slice(0, 16),
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
    
    const submitForm = async () => {
      loading.value = true
      error.value = null
      success.value = null
      
      try {
        const response = await fetch('/api/v1/weight-entries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            weight: formData.value.weight,
            date: new Date(formData.value.date).toISOString(),
            comment: formData.value.comment || undefined
          })
        })
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.detail || 'Erreur lors de l\'enregistrement')
        }
        
        const result = await response.json()
        success.value = 'Entrée de poids enregistrée avec succès !'
        
        // Emit event for parent component
        emit('entry-created', result)
        
        // Reset form
        resetForm()
        
      } catch (err) {
        error.value = err.message
        console.error('Error submitting weight entry:', err)
      } finally {
        loading.value = false
      }
    }
    
    const resetForm = () => {
      formData.value = {
        weight: null,
        date: new Date().toISOString().slice(0, 16),
        comment: ''
      }
      error.value = null
      success.value = null
    }
    
    // Clear success message after 3 seconds
    watch(success, (newValue) => {
      if (newValue) {
        setTimeout(() => {
          success.value = null
        }, 3000)
      }
    })
    
    return {
      formData,
      loading,
      error,
      success,
      bmiData,
      submitForm,
      resetForm
    }
  }
}
</script>

<style scoped>
.weight-entry-form {
  @apply bg-white rounded-lg shadow-md p-6;
}

.form-header {
  @apply mb-6;
}

.form-group {
  @apply space-y-1;
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

.form-actions {
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
  @apply mt-4 p-4 bg-red-50 border border-red-200 rounded-md;
}

.success-message {
  @apply mt-4 p-4 bg-green-50 border border-green-200 rounded-md;
}
</style>
