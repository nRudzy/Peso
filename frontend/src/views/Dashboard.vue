<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1 class="text-2xl font-bold text-gray-900">
        Tableau de Bord
      </h1>
      <p class="text-gray-600">
        Suivez votre progression de poids et IMC
      </p>
    </div>
    
    <div class="dashboard-grid" data-testid="dashboard-grid">
      <!-- Weight Entry Form -->
      <div class="dashboard-section" data-testid="weight-entry-form">
        <WeightEntryForm
          :weight-unit="userProfile?.weight_unit || 'kg'"
          :user-height="userProfile?.height"
          @entry-created="onEntryCreated"
        />
      </div>
      
      <!-- Weight Chart -->
      <div class="dashboard-section" data-testid="weight-chart">
        <WeightChart
          ref="weightChart"
          :weight-unit="userProfile?.weight_unit || 'kg'"
          :user-id="userProfile?.id"
        />
      </div>
      
      <!-- BMI Chart -->
      <div class="dashboard-section" data-testid="bmi-chart">
        <BMIChart
          ref="bmiChart"
          :user-height="userProfile?.height"
          :user-id="userProfile?.id"
        />
      </div>
      
      <!-- Weight Statistics -->
      <div class="dashboard-section" data-testid="weight-statistics">
        <WeightStatistics
          ref="weightStatistics"
          :weight-unit="userProfile?.weight_unit || 'kg'"
          :user-id="userProfile?.id"
        />
      </div>
      
      <!-- User Profile Summary -->
      <div class="dashboard-section">
        <div class="profile-summary" data-testid="user-profile">
          <div class="profile-header">
            <h3 class="text-lg font-semibold text-gray-900">
              Profil Utilisateur
            </h3>
            <button
              class="text-blue-600 hover:text-blue-800 text-sm"
              @click="editProfile"
            >
              Modifier
            </button>
          </div>
          
          <div
            v-if="userProfile"
            class="profile-content"
          >
            <div class="profile-item">
              <span class="profile-label">Nom</span>
              <span class="profile-value" data-testid="user-name">
                {{ userProfile.first_name }} {{ userProfile.last_name }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Taille</span>
              <span class="profile-value" data-testid="user-height">
                {{ userProfile.height }} {{ userProfile.height_unit }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Poids initial</span>
              <span class="profile-value" data-testid="initial-weight">
                {{ userProfile.initial_weight }} {{ userProfile.weight_unit }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Objectif</span>
              <span class="profile-value" data-testid="target-weight">
                {{ userProfile.target_weight }} {{ userProfile.weight_unit }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Statut</span>
              <span
                class="profile-status"
                data-testid="email-status"
                :class="emailVerifiedClass"
              >
                {{ userProfile.email_verified ? 'Vérifié' : 'Non vérifié' }}
              </span>
            </div>
          </div>
          
          <div
            v-else
            class="profile-loading"
          >
            <p class="text-gray-500">
              Chargement du profil...
            </p>
          </div>
        </div>
      </div>
      
      <!-- Quick Stats -->
      <div class="dashboard-section">
        <div class="quick-stats" data-testid="quick-stats">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Statistiques Rapides
          </h3>
          
          <div
            v-if="weightStats"
            class="stats-grid"
          >
            <div class="stat-card">
              <div class="stat-icon">
                📊
              </div>
              <div class="stat-content">
                <span class="stat-value" data-testid="total-entries">{{ weightStats.total_entries }}</span>
                <span class="stat-label">Entrées</span>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">
                ⚖️
              </div>
              <div class="stat-content">
                <span class="stat-value" data-testid="current-weight">{{ weightStats.current_weight }} {{ userProfile?.weight_unit }}</span>
                <span class="stat-label">Poids actuel</span>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">
                📈
              </div>
              <div class="stat-content">
                <span
                  class="stat-value"
                  :class="weightChangeClass"
                >
                  {{ formatWeightChange(weightStats.weight_change) }}
                </span>
                <span class="stat-label">Variation</span>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">
                🎯
              </div>
              <div class="stat-content">
                <span class="stat-value" data-testid="average-weight">{{ weightStats.average_weight }} {{ userProfile?.weight_unit }}</span>
                <span class="stat-label">Moyenne</span>
              </div>
            </div>
          </div>
          
          <div
            v-else
            class="stats-loading"
          >
            <p class="text-gray-500">
              Chargement des statistiques...
            </p>
          </div>
        </div>
      </div>
    </div>
    
          <!-- Daily Journal Form Section -->
      <div class="journal-section mb-8">
        <DailyJournalForm @entry-created="onJournalEntryCreated" />
      </div>
      
      <!-- Daily Journal History Section -->
      <div class="journal-history-section mb-8" data-testid="daily-journal-history">
        <DailyJournalHistory
          ref="dailyJournalHistory"
          @entry-updated="onJournalEntryUpdated"
          @entry-deleted="onJournalEntryDeleted"
        />
      </div>
      
      <!-- Weight History Section -->
      <div class="history-section" data-testid="weight-history">
        <WeightHistory
          ref="weightHistory"
          :weight-unit="userProfile?.weight_unit || 'kg'"
          :user-height="userProfile?.height"
          @entry-updated="onEntryUpdated"
          @entry-deleted="onEntryDeleted"
        />
      </div>
    
    <!-- Edit Weight Entry Modal -->
    <EditWeightEntryModal
      :is-visible="isEditModalVisible"
      :entry="selectedEntry"
      :weight-unit="userProfile?.weight_unit || 'kg'"
      :user-height="userProfile?.height"
      @close="onEditModalClose"
      @entry-updated="onEditModalEntryUpdated"
    />
    
    <!-- Edit Daily Journal Modal -->
    <EditDailyJournalModal
      :is-visible="isEditJournalModalVisible"
      :entry="selectedJournalEntry"
      @close="onEditJournalModalClose"
      @entry-updated="onEditJournalModalEntryUpdated"
    />
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import WeightEntryForm from '@/components/WeightEntryForm.vue'
import WeightChart from '@/components/WeightChart.vue'
import BMIChart from '@/components/BMIChart.vue'
import WeightStatistics from '@/components/WeightStatistics.vue'
import WeightHistory from '@/components/WeightHistory.vue'
import EditWeightEntryModal from '@/components/Modal/EditWeightEntryModal.vue'
import DailyJournalForm from '@/components/DailyJournalForm.vue'
import DailyJournalHistory from '@/components/DailyJournalHistory.vue'
import EditDailyJournalModal from '@/components/Modal/EditDailyJournalModal.vue'
import { authApi, weightEntriesApi } from '@/services/api'

export default {
  name: 'Dashboard',
  components: {
    WeightEntryForm,
    WeightChart,
    BMIChart,
    WeightStatistics,
    WeightHistory,
    EditWeightEntryModal,
    DailyJournalForm,
    DailyJournalHistory,
    EditDailyJournalModal
  },
  setup() {
    const userProfile = ref(null)
    const weightStats = ref(null)
    const weightChart = ref(null)
    const bmiChart = ref(null)
    const weightStatistics = ref(null)
    const weightHistory = ref(null)
    const dailyJournalHistory = ref(null)
    const loading = ref(false)
    const error = ref(null)
    
    // Modal state
    const isEditModalVisible = ref(false)
    const selectedEntry = ref(null)
    const isEditJournalModalVisible = ref(false)
    const selectedJournalEntry = ref(null)
    
    const emailVerifiedClass = computed(() => {
      return userProfile.value?.email_verified 
        ? 'text-green-600' 
        : 'text-red-600'
    })
    
    const weightChangeClass = computed(() => {
      if (!weightStats.value) return ''
      const change = weightStats.value.weight_change
      if (change > 0) return 'text-red-600'
      if (change < 0) return 'text-green-600'
      return 'text-gray-600'
    })
    
    const fetchUserProfile = async () => {
      try {
        const response = await authApi.getCurrentUser()
        userProfile.value = response.data
      } catch (err) {
        error.value = err.message
        console.error('Error fetching user profile:', err)
      }
    }
    
    const fetchWeightStats = async () => {
      try {
        const response = await weightEntriesApi.getWeightStatistics()
        weightStats.value = response.data
      } catch (err) {
        console.error('Error fetching weight stats:', err)
      }
    }
    
    const onEntryCreated = () => {
      // Refresh all components
      refreshAllComponents()
    }
    
    const onEntryUpdated = (entry) => {
      // Show edit modal
      selectedEntry.value = entry
      isEditModalVisible.value = true
    }
    
    const onEditModalClose = () => {
      isEditModalVisible.value = false
      selectedEntry.value = null
    }
    
    const onEditModalEntryUpdated = (updatedEntry) => {
      // Refresh all components after successful edit
      refreshAllComponents()
    }
    
    const onEntryDeleted = () => {
      // Refresh all components
      refreshAllComponents()
    }
    
    const onJournalEntryCreated = () => {
      // Refresh journal components
      if (dailyJournalHistory.value) {
        dailyJournalHistory.value.fetchEntries(true)
      }
    }
    
    const onJournalEntryUpdated = (entry) => {
      // Show edit journal modal
      selectedJournalEntry.value = entry
      isEditJournalModalVisible.value = true
    }
    
    const onEditJournalModalClose = () => {
      isEditJournalModalVisible.value = false
      selectedJournalEntry.value = null
    }
    
    const onEditJournalModalEntryUpdated = (updatedEntry) => {
      // Refresh journal components after successful edit
      if (dailyJournalHistory.value) {
        dailyJournalHistory.value.fetchEntries(true)
      }
    }
    
    const onJournalEntryDeleted = () => {
      // Refresh journal components
      if (dailyJournalHistory.value) {
        dailyJournalHistory.value.fetchEntries(true)
      }
    }
    
    const refreshAllComponents = () => {
      // Refresh charts
      if (weightChart.value) {
        weightChart.value.updateChart()
      }
      if (bmiChart.value) {
        bmiChart.value.refresh()
      }
      
      // Refresh statistics
      if (weightStatistics.value) {
        // Trigger a re-fetch by calling the component's method
        // This would require exposing a refresh method in the component
      }
      
      // Refresh history
      if (weightHistory.value) {
        weightHistory.value.fetchEntries()
      }
      
      // Refresh quick stats
      fetchWeightStats()
    }
    
    const editProfile = () => {
      // Navigate to profile edit page
      window.location.href = '/profile/edit'
    }
    
    const formatWeightChange = (change) => {
      if (change === null || change === undefined) return '0'
      if (change === 0) return '0'
      const sign = change > 0 ? '+' : ''
      return `${sign}${change.toFixed(1)} ${userProfile.value?.weight_unit || 'kg'}`
    }
    
    // Watch for changes in userProfile to refresh BMI chart when height changes
    watch(() => userProfile.value?.height, (newHeight, oldHeight) => {
      if (newHeight && newHeight !== oldHeight && bmiChart.value) {
        // User height has changed, refresh BMI chart
        bmiChart.value.refresh()
      }
    })
    
    onMounted(async () => {
      loading.value = true
      await Promise.all([
        fetchUserProfile(),
        fetchWeightStats()
      ])
      loading.value = false
    })
    
      return {
        userProfile,
        weightStats,
        weightChart,
        bmiChart,
        weightStatistics,
        weightHistory,
        loading,
        error,
        isEditModalVisible,
        selectedEntry,
        emailVerifiedClass,
        weightChangeClass,
        onEntryCreated,
        onEntryUpdated,
        onEntryDeleted,
        onEditModalClose,
        onEditModalEntryUpdated,
        onJournalEntryCreated,
        onJournalEntryUpdated,
        onEditJournalModalClose,
        onEditJournalModalEntryUpdated,
        onJournalEntryDeleted,
        editProfile,
        formatWeightChange
      }
  }
}
</script>

<style scoped>
.dashboard {
  @apply max-w-7xl mx-auto p-6;
}

.dashboard-header {
  @apply mb-8;
}

.dashboard-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8;
}

.dashboard-section {
  @apply space-y-6;
}

.history-section {
  @apply mt-8;
}

.profile-summary {
  @apply bg-white rounded-lg shadow-md p-6;
}

.profile-header {
  @apply flex justify-between items-center mb-4;
}

.profile-content {
  @apply space-y-3;
}

.profile-item {
  @apply flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0;
}

.profile-label {
  @apply text-sm text-gray-600;
}

.profile-value {
  @apply text-sm font-medium text-gray-900;
}

.profile-status {
  @apply text-sm font-medium;
}

.profile-loading {
  @apply text-center py-4;
}

.quick-stats {
  @apply bg-white rounded-lg shadow-md p-6;
}

.stats-grid {
  @apply grid grid-cols-2 gap-4;
}

.stat-card {
  @apply flex items-center p-4 bg-gray-50 rounded-lg;
}

.stat-icon {
  @apply text-2xl mr-3;
}

.stat-content {
  @apply flex flex-col;
}

.stat-value {
  @apply text-lg font-semibold text-gray-900;
}

.stat-label {
  @apply text-xs text-gray-600;
}

.stats-loading {
  @apply text-center py-4;
}

@media (max-width: 1024px) {
  .dashboard-grid {
    @apply grid-cols-1;
  }
}
</style>
