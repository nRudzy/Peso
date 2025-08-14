<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">Modifier l'entrée du journal</h3>
        <button @click="closeModal" class="modal-close-btn">✕</button>
      </div>
      
      <div class="modal-body">
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Date -->
          <div>
            <label for="edit-journal-date" class="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              id="edit-journal-date"
              v-model="formData.date"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <!-- Sleep Quality -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              😴 Qualité de sommeil (1-5)
            </label>
            <div class="flex space-x-2">
              <button
                v-for="rating in 5"
                :key="rating"
                type="button"
                @click="formData.sleep_quality = rating"
                class="flex-1 py-2 px-3 border rounded-md text-center transition-colors"
                :class="formData.sleep_quality === rating 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'"
              >
                {{ rating }}
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>Très mauvaise</span>
              <span>Excellente</span>
            </div>
          </div>
          
          <!-- Energy Level -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              ⚡ Niveau d'énergie (1-5)
            </label>
            <div class="flex space-x-2">
              <button
                v-for="rating in 5"
                :key="rating"
                type="button"
                @click="formData.energy_level = rating"
                class="flex-1 py-2 px-3 border rounded-md text-center transition-colors"
                :class="formData.energy_level === rating 
                  ? 'bg-green-500 text-white border-green-500' 
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'"
              >
                {{ rating }}
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>Très faible</span>
              <span>Excellente</span>
            </div>
          </div>
          
          <!-- Notes -->
          <div>
            <label for="edit-journal-notes" class="block text-sm font-medium text-gray-700 mb-2">
              📝 Notes (optionnel)
            </label>
            <textarea
              id="edit-journal-notes"
              v-model="formData.notes"
              rows="3"
              placeholder="Comment vous sentiez-vous ce jour-là ?"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              maxlength="1000"
            ></textarea>
            <div class="text-xs text-gray-500 text-right mt-1">
              {{ formData.notes.length }}/1000 caractères
            </div>
          </div>
        </form>
      </div>
      
      <div class="modal-actions">
        <button @click="closeModal" class="btn-secondary">
          Annuler
        </button>
        <button 
          @click="submitForm" 
          :disabled="isSubmitting"
          class="btn-primary"
        >
          <span v-if="isSubmitting">Enregistrement...</span>
          <span v-else>Enregistrer</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { dailyJournalApi } from '@/services/api'

export default {
  name: 'EditDailyJournalModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    entry: {
      type: Object,
      default: null
    }
  },
  emits: ['close', 'entry-updated'],
  setup(props, { emit }) {
    const formData = ref({
      date: '',
      sleep_quality: null,
      energy_level: null,
      notes: ''
    })
    
    const isSubmitting = ref(false)
    const error = ref('')
    
    const closeModal = () => {
      emit('close')
    }
    
    const submitForm = async () => {
      if (!props.entry) return
      
      isSubmitting.value = true
      error.value = ''
      
      try {
        const response = await dailyJournalApi.updateJournalEntry(
          props.entry.id,
          {
            date: formData.value.date,
            sleep_quality: formData.value.sleep_quality,
            energy_level: formData.value.energy_level,
            notes: formData.value.notes || null
          }
        )
        
        emit('entry-updated', response.data)
        closeModal()
        
      } catch (err) {
        error.value = err.response?.data?.detail || 'Erreur lors de la mise à jour'
        console.error('Error updating journal entry:', err)
      } finally {
        isSubmitting.value = false
      }
    }
    
    // Watch for changes in the entry prop to populate the form
    watch(() => props.entry, (newEntry) => {
      if (newEntry) {
        formData.value = {
          date: newEntry.date ? newEntry.date.split('T')[0] : '',
          sleep_quality: newEntry.sleep_quality,
          energy_level: newEntry.energy_level,
          notes: newEntry.notes || ''
        }
      }
    }, { immediate: true })
    
    return {
      formData,
      isSubmitting,
      error,
      closeModal,
      submitForm
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

.modal-body {
  @apply p-6;
}

.modal-actions {
  @apply flex justify-end space-x-3 p-6 border-t border-gray-200;
}

.btn-primary {
  @apply px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
  @apply px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500;
}
</style>
