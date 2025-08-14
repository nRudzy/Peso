<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1 class="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
      <p class="text-gray-600">Suivez votre progression de poids</p>
    </div>
    
    <div class="dashboard-grid">
      <!-- Weight Entry Form -->
      <div class="dashboard-section">
        <WeightEntryForm
          :weight-unit="userProfile?.weight_unit || 'kg'"
          :user-height="userProfile?.height"
          @entry-created="onEntryCreated"
        />
      </div>
      
      <!-- Weight Chart -->
      <div class="dashboard-section">
        <WeightChart
          :weight-unit="userProfile?.weight_unit || 'kg'"
          :user-id="userProfile?.id"
          ref="weightChart"
        />
      </div>
      
      <!-- User Profile Summary -->
      <div class="dashboard-section">
        <div class="profile-summary">
          <div class="profile-header">
            <h3 class="text-lg font-semibold text-gray-900">Profil Utilisateur</h3>
            <button @click="editProfile" class="text-blue-600 hover:text-blue-800 text-sm">
              Modifier
            </button>
          </div>
          
          <div class="profile-content" v-if="userProfile">
            <div class="profile-item">
              <span class="profile-label">Nom</span>
              <span class="profile-value">
                {{ userProfile.first_name }} {{ userProfile.last_name }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Taille</span>
              <span class="profile-value">
                {{ userProfile.height }} {{ userProfile.height_unit }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Poids initial</span>
              <span class="profile-value">
                {{ userProfile.initial_weight }} {{ userProfile.weight_unit }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Objectif</span>
              <span class="profile-value">
                {{ userProfile.target_weight }} {{ userProfile.weight_unit }}
              </span>
            </div>
            
            <div class="profile-item">
              <span class="profile-label">Statut</span>
              <span class="profile-status" :class="emailVerifiedClass">
                {{ userProfile.email_verified ? 'Vérifié' : 'Non vérifié' }}
              </span>
            </div>
          </div>
          
          <div v-else class="profile-loading">
            <p class="text-gray-500">Chargement du profil...</p>
          </div>
        </div>
      </div>
      
      <!-- Quick Stats -->
      <div class="dashboard-section">
        <div class="quick-stats">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Statistiques Rapides</h3>
          
          <div class="stats-grid" v-if="weightStats">
            <div class="stat-card">
              <div class="stat-icon">📊</div>
              <div class="stat-content">
                <span class="stat-value">{{ weightStats.total_entries }}</span>
                <span class="stat-label">Entrées</span>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">⚖️</div>
              <div class="stat-content">
                <span class="stat-value">{{ weightStats.current_weight }} {{ userProfile?.weight_unit }}</span>
                <span class="stat-label">Poids actuel</span>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">📈</div>
              <div class="stat-content">
                <span class="stat-value" :class="weightChangeClass">
                  {{ formatWeightChange(weightStats.weight_change) }}
                </span>
                <span class="stat-label">Variation</span>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">🎯</div>
              <div class="stat-content">
                <span class="stat-value">{{ weightStats.average_weight }} {{ userProfile?.weight_unit }}</span>
                <span class="stat-label">Moyenne</span>
              </div>
            </div>
          </div>
          
          <div v-else class="stats-loading">
            <p class="text-gray-500">Chargement des statistiques...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import WeightEntryForm from '@/components/WeightEntryForm.vue'
import WeightChart from '@/components/WeightChart.vue'

export default {
  name: 'Dashboard',
  components: {
    WeightEntryForm,
    WeightChart
  },
  setup() {
    const userProfile = ref(null)
    const weightStats = ref(null)
    const weightChart = ref(null)
    const loading = ref(false)
    const error = ref(null)
    
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
        const response = await fetch('/api/v1/users/me', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement du profil')
        }
        
        userProfile.value = await response.json()
      } catch (err) {
        error.value = err.message
        console.error('Error fetching user profile:', err)
      }
    }
    
    const fetchWeightStats = async () => {
      try {
        const response = await fetch('/api/v1/weight-entries/statistics', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des statistiques')
        }
        
        weightStats.value = await response.json()
      } catch (err) {
        console.error('Error fetching weight stats:', err)
      }
    }
    
    const onEntryCreated = (entry) => {
      // Refresh chart and stats
      if (weightChart.value) {
        weightChart.value.updateChart()
      }
      fetchWeightStats()
    }
    
    const editProfile = () => {
      // TODO: Navigate to profile edit page
      console.log('Edit profile clicked')
    }
    
    const formatWeightChange = (change) => {
      if (change === 0) return '0'
      const sign = change > 0 ? '+' : ''
      return `${sign}${change.toFixed(1)} ${userProfile.value?.weight_unit}`
    }
    
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
      loading,
      error,
      emailVerifiedClass,
      weightChangeClass,
      onEntryCreated,
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
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}

.dashboard-section {
  @apply space-y-6;
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
