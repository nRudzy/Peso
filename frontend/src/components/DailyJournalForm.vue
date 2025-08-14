<template>
  <div class="daily-journal-form bg-white rounded-lg shadow-md p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">
      📝 Journal Quotidien
    </h3>
    
    <form @submit.prevent="submitJournalEntry" class="space-y-4">
      <!-- Date Selection -->
      <div>
        <label for="journal-date" class="block text-sm font-medium text-gray-700 mb-2">
          Date
        </label>
        <input
          id="journal-date"
          v-model="formData.date"
          type="date"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          :max="today"
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
        <label for="journal-notes" class="block text-sm font-medium text-gray-700 mb-2">
          📝 Notes (optionnel)
        </label>
        <textarea
          id="journal-notes"
          v-model="formData.notes"
          rows="3"
          placeholder="Comment vous sentez-vous aujourd'hui ? Avez-vous des observations particulières ?"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          maxlength="1000"
        ></textarea>
        <div class="text-xs text-gray-500 text-right mt-1">
          {{ formData.notes.length }}/1000 caractères
        </div>
      </div>
      
      <!-- Submit Button -->
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          @click="resetForm"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Réinitialiser
        </button>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSubmitting">Enregistrement...</span>
          <span v-else>Enregistrer</span>
        </button>
      </div>
    </form>
    
    <!-- Success Message -->
    <div
      v-if="showSuccessMessage"
      class="mt-4 p-3 bg-green-50 border border-green-200 rounded-md"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-green-800">
            Entrée du journal enregistrée avec succès !
          </p>
        </div>
      </div>
    </div>
    
    <!-- Error Message -->
    <div
      v-if="error"
      class="mt-4 p-3 bg-red-50 border border-red-200 rounded-md"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-red-800">
            {{ error }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { dailyJournalApi } from '@/services/api'

export default {
  name: 'DailyJournalForm',
  emits: ['entry-created'],
  setup(props, { emit }) {
    const formData = ref({
      date: '',
      sleep_quality: null,
      energy_level: null,
      notes: ''
    })
    
    const isSubmitting = ref(false)
    const error = ref('')
    const showSuccessMessage = ref(false)
    
    const today = computed(() => {
      return new Date().toISOString().split('T')[0]
    })
    
    const resetForm = () => {
      formData.value = {
        date: today.value,
        sleep_quality: null,
        energy_level: null,
        notes: ''
      }
      error.value = ''
      showSuccessMessage.value = false
    }
    
    const submitJournalEntry = async () => {
      if (!formData.value.date) {
        error.value = 'Veuillez sélectionner une date'
        return
      }
      
      isSubmitting.value = true
      error.value = ''
      
      try {
        const response = await dailyJournalApi.createJournalEntry({
          date: formData.value.date,
          sleep_quality: formData.value.sleep_quality,
          energy_level: formData.value.energy_level,
          notes: formData.value.notes || null
        })
        
        showSuccessMessage.value = true
        emit('entry-created', response.data)
        
        // Reset form after successful submission
        setTimeout(() => {
          resetForm()
        }, 2000)
        
      } catch (err) {
        error.value = err.response?.data?.detail || 'Erreur lors de l\'enregistrement'
        console.error('Error creating journal entry:', err)
      } finally {
        isSubmitting.value = false
      }
    }
    
    onMounted(() => {
      // Set default date to today
      formData.value.date = today.value
    })
    
    return {
      formData,
      isSubmitting,
      error,
      showSuccessMessage,
      today,
      resetForm,
      submitJournalEntry
    }
  }
}
</script>

<style scoped>
.daily-journal-form {
  @apply max-w-md;
}
</style>
