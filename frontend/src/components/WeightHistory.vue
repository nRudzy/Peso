<template>
  <div class="weight-history" data-testid="weight-history">
    <div class="history-header">
      <h3 class="text-lg font-semibold text-gray-900">Historique des Entrées</h3>
      <div class="history-controls">
        <select v-model="selectedPeriod" data-testid="history-period-select" @change="fetchEntries" class="form-select">
          <option value="all">Toutes les entrées</option>
          <option value="7">7 derniers jours</option>
          <option value="30">30 derniers jours</option>
          <option value="90">90 derniers jours</option>
        </select>
      </div>
    </div>
    
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>Chargement de l'historique...</p>
    </div>
    
    <div v-else-if="error" class="error-message">
      <p class="text-red-600">{{ error }}</p>
    </div>
    
    <div v-else-if="entries.length > 0" class="history-content">
      <div class="entries-list">
        <div 
          v-for="entry in entries" 
          :key="entry.id" 
          class="entry-card"
          data-testid="weight-entry"
        >
          <div class="entry-header">
            <div class="entry-date">
              <span class="date-day">{{ formatDate(entry.date).day }}</span>
              <span class="date-month">{{ formatDate(entry.date).month }}</span>
            </div>
            <div class="entry-weight">
              <span class="weight-value">{{ entry.weight }} {{ weightUnit }}</span>
              <span v-if="entry.weight_change" class="weight-change" :class="getChangeClass(entry.weight_change)">
                {{ formatWeightChange(entry.weight_change) }}
              </span>
            </div>
            <div class="entry-actions">
              <button 
                @click="editEntry(entry)"
                class="action-btn edit-btn"
                data-testid="edit-entry-button"
                title="Modifier"
              >
                ✏️
              </button>
              <button 
                @click="deleteEntry(entry.id)"
                class="action-btn delete-btn"
                data-testid="delete-entry-button"
                title="Supprimer"
              >
                🗑️
              </button>
            </div>
          </div>
          
          <div v-if="entry.comment" class="entry-comment">
            <p class="comment-text">{{ entry.comment }}</p>
          </div>
          
          <div class="entry-bmi" v-if="userHeight">
            <span class="bmi-label">IMC:</span>
            <span class="bmi-value">{{ calculateBMI(entry.weight) }}</span>
            <span class="bmi-category" :class="getBMICategoryClass(calculateBMI(entry.weight))">
              {{ getBMICategory(calculateBMI(entry.weight)) }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div v-if="totalPages > 1" class="pagination">
        <button 
          @click="changePage(currentPage - 1)"
          :disabled="currentPage <= 1"
          class="pagination-btn"
        >
          ← Précédent
        </button>
        
        <div class="page-numbers">
          <span class="page-info" data-testid="pagination-info">
            Page {{ currentPage }} sur {{ totalPages }}
          </span>
        </div>
        
        <button 
          @click="changePage(currentPage + 1)"
          :disabled="currentPage >= totalPages"
          class="pagination-btn"
        >
          Suivant →
        </button>
      </div>
    </div>
    
    <div v-else class="no-entries">
      <div class="no-entries-content">
        <div class="no-entries-icon">📊</div>
        <h4 class="no-entries-title">Aucune entrée trouvée</h4>
        <p class="no-entries-text">
          Commencez par ajouter votre première entrée de poids pour voir votre historique ici.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { weightEntriesApi } from '@/services/api'
import { calculate_bmi, get_bmi_category, get_bmi_color_class } from '@/utils/bmi-calculator'

export default {
  name: 'WeightHistory',
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
  emits: ['entry-updated', 'entry-deleted'],
  setup(props, { emit }) {
    const entries = ref([])
    const loading = ref(false)
    const error = ref(null)
    const selectedPeriod = ref('all')
    const currentPage = ref(1)
    const totalPages = ref(1)
    const totalEntries = ref(0)
    
    const fetchEntries = async () => {
      loading.value = true
      error.value = null
      
      try {
        let response
        
        if (selectedPeriod.value === 'all') {
          response = await weightEntriesApi.getWeightEntries({
            page: currentPage.value,
            limit: 10
          })
        } else {
          const days = parseInt(selectedPeriod.value)
          const endDate = new Date()
          const startDate = new Date()
          startDate.setDate(endDate.getDate() - days)
          
          response = await weightEntriesApi.getWeightEntries({
            page: currentPage.value,
            limit: 10,
            start_date: startDate.toISOString(),
            end_date: endDate.toISOString()
          })
        }
        
        entries.value = response.data.data || response.data.entries || []
        totalEntries.value = response.data.metadata?.total || entries.value.length
        totalPages.value = response.data.metadata?.total_pages || 1
        
      } catch (err) {
        error.value = err.message || 'Erreur lors du chargement de l\'historique'
        console.error('Error fetching entries:', err)
      } finally {
        loading.value = false
      }
    }
    
    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        fetchEntries()
      }
    }
    
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return {
        day: date.getDate().toString().padStart(2, '0'),
        month: date.toLocaleDateString('fr-FR', { month: 'short' }),
        full: date.toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }
    }
    
    const formatWeightChange = (change) => {
      if (change === null || change === undefined) return ''
      if (change === 0) return '0'
      const sign = change > 0 ? '+' : ''
      return `${sign}${change.toFixed(1)} ${props.weightUnit}`
    }
    
    const getChangeClass = (change) => {
      if (change > 0) return 'text-red-600'
      if (change < 0) return 'text-green-600'
      return 'text-gray-600'
    }
    
    const calculateBMI = (weight) => {
      if (!props.userHeight || !weight) return null
      try {
        return calculate_bmi(weight, props.userHeight).toFixed(1)
      } catch (err) {
        return null
      }
    }
    
    const getBMICategory = (bmi) => {
      if (!bmi) return ''
      try {
        return get_bmi_category(parseFloat(bmi))
      } catch (err) {
        return ''
      }
    }
    
    const getBMICategoryClass = (bmi) => {
      if (!bmi) return ''
      try {
        return get_bmi_color_class(parseFloat(bmi))
      } catch (err) {
        return ''
      }
    }
    
    const editEntry = (entry) => {
      // Emit event for parent to handle editing
      emit('entry-updated', entry)
    }
    
    const deleteEntry = async (entryId) => {
      if (!confirm('Êtes-vous sûr de vouloir supprimer cette entrée ?')) {
        return
      }
      
      try {
        await weightEntriesApi.deleteWeightEntry(entryId)
        emit('entry-deleted', entryId)
        fetchEntries() // Refresh the list
      } catch (err) {
        error.value = err.message || 'Erreur lors de la suppression'
        console.error('Error deleting entry:', err)
      }
    }
    
    onMounted(() => {
      fetchEntries()
    })
    
    return {
      entries,
      loading,
      error,
      selectedPeriod,
      currentPage,
      totalPages,
      totalEntries,
      fetchEntries,
      changePage,
      formatDate,
      formatWeightChange,
      getChangeClass,
      calculateBMI,
      getBMICategory,
      getBMICategoryClass,
      editEntry,
      deleteEntry
    }
  }
}
</script>

<style scoped>
.weight-history {
  @apply bg-white rounded-lg shadow-md p-6;
  position: relative;
}

.history-header {
  @apply flex justify-between items-center mb-6;
}

.history-controls {
  @apply flex gap-2;
}

.form-select {
  @apply px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.history-content {
  @apply space-y-4;
}

.entries-list {
  @apply space-y-3;
}

.entry-card {
  @apply border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow;
}

.entry-header {
  @apply flex items-center justify-between;
}

.entry-date {
  @apply flex flex-col items-center;
}

.date-day {
  @apply text-lg font-bold text-gray-900;
}

.date-month {
  @apply text-xs text-gray-600 uppercase;
}

.entry-weight {
  @apply flex flex-col items-center;
}

.weight-value {
  @apply text-xl font-semibold text-gray-900;
}

.weight-change {
  @apply text-sm;
}

.entry-actions {
  @apply flex gap-2;
}

.action-btn {
  @apply p-2 rounded-md hover:bg-gray-100 transition-colors;
}

.edit-btn:hover {
  @apply bg-blue-50;
}

.delete-btn:hover {
  @apply bg-red-50;
}

.entry-comment {
  @apply mt-3 pt-3 border-t border-gray-100;
}

.comment-text {
  @apply text-sm text-gray-700 italic;
}

.entry-bmi {
  @apply mt-2 pt-2 border-t border-gray-100 flex items-center gap-2;
}

.bmi-label {
  @apply text-xs text-gray-600;
}

.bmi-value {
  @apply text-sm font-medium text-gray-900;
}

.bmi-category {
  @apply text-xs px-2 py-1 rounded-full;
}

.pagination {
  @apply flex items-center justify-between mt-6 pt-4 border-t border-gray-200;
}

.pagination-btn {
  @apply px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed;
}

.page-numbers {
  @apply flex items-center;
}

.page-info {
  @apply text-sm text-gray-600;
}

.no-entries {
  @apply py-12;
}

.no-entries-content {
  @apply text-center;
}

.no-entries-icon {
  @apply text-4xl mb-4;
}

.no-entries-title {
  @apply text-lg font-medium text-gray-900 mb-2;
}

.no-entries-text {
  @apply text-gray-600;
}

.loading-overlay {
  @apply absolute inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-center;
  z-index: 10;
}

.loading-spinner {
  @apply w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-2;
}

.error-message {
  @apply p-4 bg-red-50 border border-red-200 rounded-md;
}

@media (max-width: 640px) {
  .history-header {
    @apply flex-col items-start gap-4;
  }
  
  .entry-header {
    @apply flex-col items-start gap-3;
  }
  
  .entry-weight {
    @apply items-start;
  }
  
  .entry-actions {
    @apply self-end;
  }
}
</style>
