<template>
  <div class="daily-journal-history bg-white rounded-lg shadow-md p-6">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-lg font-semibold text-gray-900">
        📊 Historique du Journal
      </h3>
      <div class="flex space-x-2">
        <button
          @click="exportData('csv')"
          :disabled="isExporting"
          class="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50 disabled:opacity-50"
        >
          📄 CSV
        </button>
        <button
          @click="exportData('json')"
          :disabled="isExporting"
          class="px-3 py-1 text-sm text-green-600 border border-green-600 rounded hover:bg-green-50 disabled:opacity-50"
        >
          📄 JSON
        </button>
      </div>
    </div>
    
    <!-- Statistics Summary -->
    <div v-if="statistics" class="mb-6">
      <h4 class="text-md font-medium text-gray-900 mb-3">📈 Statistiques (30 derniers jours)</h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-blue-50 p-3 rounded-lg">
          <div class="text-2xl font-bold text-blue-600">{{ statistics.total_entries }}</div>
          <div class="text-sm text-blue-800">Entrées</div>
        </div>
        <div class="bg-purple-50 p-3 rounded-lg">
          <div class="text-2xl font-bold text-purple-600">
            {{ statistics.average_sleep_quality ? statistics.average_sleep_quality.toFixed(1) : 'N/A' }}
          </div>
          <div class="text-sm text-purple-800">Sommeil moyen</div>
        </div>
        <div class="bg-green-50 p-3 rounded-lg">
          <div class="text-2xl font-bold text-green-600">
            {{ statistics.average_energy_level ? statistics.average_energy_level.toFixed(1) : 'N/A' }}
          </div>
          <div class="text-sm text-green-800">Énergie moyenne</div>
        </div>
        <div class="bg-orange-50 p-3 rounded-lg">
          <div class="text-2xl font-bold text-orange-600">
            {{ statistics.most_common_sleep_quality || 'N/A' }}
          </div>
          <div class="text-sm text-orange-800">Sommeil le plus fréquent</div>
        </div>
      </div>
    </div>
    
    <!-- Date Range Filter -->
    <div class="mb-4 flex flex-wrap gap-2">
      <input
        v-model="startDate"
        type="date"
        class="px-3 py-2 border border-gray-300 rounded-md text-sm"
        @change="fetchEntries"
      />
      <span class="text-gray-500 self-center">à</span>
      <input
        v-model="endDate"
        type="date"
        class="px-3 py-2 border border-gray-300 rounded-md text-sm"
        @change="fetchEntries"
      />
      <button
        @click="resetDateFilter"
        class="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Réinitialiser
      </button>
    </div>
    
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      <p class="text-gray-500 mt-2">Chargement des entrées...</p>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-600">{{ error }}</p>
      <button
        @click="fetchEntries"
        class="mt-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
      >
        Réessayer
      </button>
    </div>
    
    <!-- Empty State -->
    <div v-else-if="entries.length === 0" class="text-center py-8">
      <div class="text-4xl mb-4">📝</div>
      <p class="text-gray-500">Aucune entrée de journal trouvée pour cette période</p>
    </div>
    
    <!-- Entries List -->
    <div v-else class="space-y-4">
      <div
        v-for="entry in entries"
        :key="entry.id"
        class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
      >
        <div class="flex justify-between items-start mb-3">
          <div class="flex items-center space-x-3">
            <div class="text-lg font-medium text-gray-900">
              {{ formatDate(entry.date) }}
            </div>
            <div class="text-sm text-gray-500">
              {{ formatTime(entry.date) }}
            </div>
          </div>
          <div class="flex space-x-2">
            <button
              @click="editEntry(entry)"
              class="text-blue-600 hover:text-blue-800 text-sm"
            >
              Modifier
            </button>
            <button
              @click="deleteEntry(entry.id)"
              class="text-red-600 hover:text-red-800 text-sm"
            >
              Supprimer
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Sleep Quality -->
          <div class="flex items-center space-x-2">
            <span class="text-blue-600">😴</span>
            <div>
              <div class="text-sm text-gray-600">Sommeil</div>
              <div class="flex items-center">
                <div class="flex space-x-1">
                  <div
                    v-for="star in 5"
                    :key="star"
                    class="w-3 h-3 rounded-full"
                    :class="star <= (entry.sleep_quality || 0) ? 'bg-blue-500' : 'bg-gray-300'"
                  ></div>
                </div>
                <span class="ml-2 text-sm font-medium">{{ entry.sleep_quality || 'Non renseigné' }}</span>
              </div>
            </div>
          </div>
          
          <!-- Energy Level -->
          <div class="flex items-center space-x-2">
            <span class="text-green-600">⚡</span>
            <div>
              <div class="text-sm text-gray-600">Énergie</div>
              <div class="flex items-center">
                <div class="flex space-x-1">
                  <div
                    v-for="star in 5"
                    :key="star"
                    class="w-3 h-3 rounded-full"
                    :class="star <= (entry.energy_level || 0) ? 'bg-green-500' : 'bg-gray-300'"
                  ></div>
                </div>
                <span class="ml-2 text-sm font-medium">{{ entry.energy_level || 'Non renseigné' }}</span>
              </div>
            </div>
          </div>
          
          <!-- Weight (if available) -->
          <div class="flex items-center space-x-2">
            <span class="text-purple-600">⚖️</span>
            <div>
              <div class="text-sm text-gray-600">Poids</div>
              <div class="text-sm font-medium">
                {{ entry.weight ? `${entry.weight} ${entry.weight_unit || 'kg'}` : 'Non renseigné' }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Notes -->
        <div v-if="entry.notes" class="mt-3 pt-3 border-t border-gray-200">
          <div class="text-sm text-gray-600 mb-1">📝 Notes :</div>
          <div class="text-sm text-gray-800 bg-gray-50 p-2 rounded">
            {{ entry.notes }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Load More Button -->
    <div v-if="hasMoreEntries && !loading" class="text-center mt-6">
      <button
        @click="loadMoreEntries"
        class="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
      >
        Charger plus d'entrées
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { dailyJournalApi } from '@/services/api'

export default {
  name: 'DailyJournalHistory',
  emits: ['entry-updated', 'entry-deleted'],
  setup(props, { emit }) {
    const entries = ref([])
    const statistics = ref(null)
    const loading = ref(false)
    const error = ref('')
    const isExporting = ref(false)
    const hasMoreEntries = ref(true)
    const currentPage = ref(1)
    
    const startDate = ref('')
    const endDate = ref('')
    
    const fetchEntries = async (reset = false) => {
      if (reset) {
        currentPage.value = 1
        entries.value = []
      }
      
      loading.value = true
      error.value = ''
      
      try {
        const params = {
          limit: 20,
          skip: (currentPage.value - 1) * 20
        }
        
        if (startDate.value) {
          params.start_date = startDate.value
        }
        if (endDate.value) {
          params.end_date = endDate.value
        }
        
        const response = await dailyJournalApi.getJournalEntries(params)
        
        if (reset) {
          entries.value = response.data
        } else {
          entries.value.push(...response.data)
        }
        
        hasMoreEntries.value = response.data.length === 20
        
      } catch (err) {
        error.value = err.response?.data?.detail || 'Erreur lors du chargement des entrées'
        console.error('Error fetching journal entries:', err)
      } finally {
        loading.value = false
      }
    }
    
    const fetchStatistics = async () => {
      try {
        const response = await dailyJournalApi.getJournalStatistics({ days: 30 })
        statistics.value = response.data
      } catch (err) {
        console.error('Error fetching statistics:', err)
      }
    }
    
    const loadMoreEntries = () => {
      currentPage.value++
      fetchEntries()
    }
    
    const resetDateFilter = () => {
      startDate.value = ''
      endDate.value = ''
      fetchEntries(true)
    }
    
    const editEntry = (entry) => {
      emit('entry-updated', entry)
    }
    
    const deleteEntry = async (entryId) => {
      if (!confirm('Êtes-vous sûr de vouloir supprimer cette entrée ?')) {
        return
      }
      
      try {
        await dailyJournalApi.deleteJournalEntry(entryId)
        emit('entry-deleted', entryId)
        fetchEntries(true)
      } catch (err) {
        error.value = err.response?.data?.detail || 'Erreur lors de la suppression'
        console.error('Error deleting journal entry:', err)
      }
    }
    
    const exportData = async (format) => {
      isExporting.value = true
      
      try {
        const params = {}
        if (startDate.value) params.start_date = startDate.value
        if (endDate.value) params.end_date = endDate.value
        
        const response = await dailyJournalApi.exportJournal(format, params)
        
        // Create download link
        const blob = new Blob([response.data], {
          type: format === 'csv' ? 'text/csv' : 'application/json'
        })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `journal_export_${new Date().toISOString().split('T')[0]}.${format}`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
        
      } catch (err) {
        error.value = `Erreur lors de l'export ${format.toUpperCase()}`
        console.error(`Error exporting ${format}:`, err)
      } finally {
        isExporting.value = false
      }
    }
    
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    const formatTime = (dateString) => {
      return new Date(dateString).toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    
    onMounted(() => {
      fetchEntries(true)
      fetchStatistics()
    })
    
    return {
      entries,
      statistics,
      loading,
      error,
      isExporting,
      hasMoreEntries,
      startDate,
      endDate,
      fetchEntries,
      loadMoreEntries,
      resetDateFilter,
      editEntry,
      deleteEntry,
      exportData,
      formatDate,
      formatTime
    }
  }
}
</script>

<style scoped>
.daily-journal-history {
  @apply max-w-4xl;
}
</style>
