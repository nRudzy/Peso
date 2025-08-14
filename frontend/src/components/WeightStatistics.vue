<template>
  <div class="weight-statistics" data-testid="weight-statistics">
    <div class="statistics-header">
      <h3 class="text-lg font-semibold text-gray-900">Statistiques Détaillées</h3>
    </div>
    
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>Chargement des statistiques...</p>
    </div>
    
    <div v-else-if="error" class="error-message">
      <p class="text-red-600">{{ error }}</p>
    </div>
    
    <div v-else-if="statistics" class="statistics-content">
      <!-- Goal Progress Section -->
      <div v-if="statistics.goal_progression_percentage !== null" class="goal-progress-section">
        <h4 class="text-md font-medium text-gray-800 mb-3">Progression vers l'objectif</h4>
        <div class="goal-progress-bar">
          <div class="progress-bar" data-testid="goal-progress-bar">
            <div 
              class="progress-fill"
              :style="{ width: `${Math.min(100, Math.max(0, statistics.goal_progression_percentage))}%` }"
              :class="progressBarClass"
            ></div>
          </div>
          <div class="progress-text">
            <span class="progress-percentage" data-testid="goal-progress-percentage">{{ statistics.goal_progression_percentage }}%</span>
            <span class="progress-detail" data-testid="weight-to-goal">
              {{ formatWeightToGoal(statistics.weight_to_goal) }} vers l'objectif
            </span>
          </div>
        </div>
      </div>
      
      <!-- Weight Range Section -->
      <div class="weight-range-section">
        <h4 class="text-md font-medium text-gray-800 mb-3">Plage de poids</h4>
        <div class="weight-range-grid">
          <div class="range-item">
            <span class="range-label">Poids minimum</span>
            <span class="range-value" data-testid="min-weight">{{ statistics.min_weight }} {{ weightUnit }}</span>
          </div>
          <div class="range-item">
            <span class="range-label">Poids maximum</span>
            <span class="range-value" data-testid="max-weight">{{ statistics.max_weight }} {{ weightUnit }}</span>
          </div>
          <div class="range-item">
            <span class="range-label">Écart total</span>
            <span class="range-value">{{ weightRange }} {{ weightUnit }}</span>
          </div>
        </div>
      </div>
      
      <!-- Current Status Section -->
      <div class="current-status-section">
        <h4 class="text-md font-medium text-gray-800 mb-3">Statut actuel</h4>
        <div class="status-grid">
          <div class="status-item">
            <span class="status-label">Poids actuel</span>
            <span class="status-value" data-testid="current-weight">{{ statistics.current_weight }} {{ weightUnit }}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Poids initial</span>
            <span class="status-value">{{ statistics.initial_weight }} {{ weightUnit }}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Variation totale</span>
            <span class="status-value" :class="totalChangeClass">
              {{ formatWeightChange(totalWeightChange) }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Motivational Message -->
      <div v-if="motivationalMessage" class="motivational-section">
        <div class="motivational-card">
          <div class="motivational-icon">💪</div>
          <div class="motivational-content">
            <p class="motivational-text" data-testid="motivational-message">{{ motivationalMessage }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="no-data-message">
      <p class="text-gray-500">Aucune donnée disponible</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { weightEntriesApi } from '@/services/api'

export default {
  name: 'WeightStatistics',
  props: {
    weightUnit: {
      type: String,
      default: 'kg'
    },
    userId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const statistics = ref(null)
    const loading = ref(false)
    const error = ref(null)
    
    const weightRange = computed(() => {
      if (!statistics.value?.min_weight || !statistics.value?.max_weight) return 0
      return (statistics.value.max_weight - statistics.value.min_weight).toFixed(1)
    })
    
    const totalWeightChange = computed(() => {
      if (!statistics.value?.current_weight || !statistics.value?.initial_weight) return 0
      return statistics.value.current_weight - statistics.value.initial_weight
    })
    
    const totalChangeClass = computed(() => {
      const change = totalWeightChange.value
      if (change > 0) return 'text-red-600'
      if (change < 0) return 'text-green-600'
      return 'text-gray-600'
    })
    
    const progressBarClass = computed(() => {
      const progress = statistics.value?.goal_progression_percentage || 0
      if (progress >= 80) return 'bg-green-500'
      if (progress >= 60) return 'bg-blue-500'
      if (progress >= 40) return 'bg-yellow-500'
      return 'bg-red-500'
    })
    
    const motivationalMessage = computed(() => {
      if (!statistics.value) return null
      
      const progress = statistics.value.goal_progression_percentage || 0
      const weightToGoal = statistics.value.weight_to_goal || 0
      
      if (progress >= 90) {
        return "Excellent travail ! Vous êtes presque à votre objectif !"
      } else if (progress >= 70) {
        return "Continuez comme ça ! Vous faites de très bons progrès."
      } else if (progress >= 50) {
        return "Vous êtes à mi-chemin ! Gardez cette motivation."
      } else if (progress >= 30) {
        return "Bien commencé ! Chaque petit pas compte vers votre objectif."
      } else if (weightToGoal > 0) {
        return "Le début est toujours le plus difficile. Vous y arriverez !"
      } else {
        return "Commencez votre voyage vers un poids plus sain aujourd'hui !"
      }
    })
    
    const formatWeightChange = (change) => {
      if (change === null || change === undefined) return '0'
      if (change === 0) return '0'
      const sign = change > 0 ? '+' : ''
      return `${sign}${change.toFixed(1)} ${props.weightUnit}`
    }
    
    const formatWeightToGoal = (weightToGoal) => {
      if (weightToGoal === null || weightToGoal === undefined) return '0'
      if (weightToGoal === 0) return 'Objectif atteint !'
      const sign = weightToGoal > 0 ? '+' : ''
      return `${sign}${weightToGoal.toFixed(1)} ${props.weightUnit}`
    }
    
    const fetchStatistics = async () => {
      loading.value = true
      error.value = null
      
      try {
        const response = await weightEntriesApi.getWeightStatistics()
        statistics.value = response.data
      } catch (err) {
        error.value = err.message || 'Erreur lors du chargement des statistiques'
        console.error('Error fetching statistics:', err)
      } finally {
        loading.value = false
      }
    }
    
    onMounted(() => {
      fetchStatistics()
    })
    
    return {
      statistics,
      loading,
      error,
      weightRange,
      totalWeightChange,
      totalChangeClass,
      progressBarClass,
      motivationalMessage,
      formatWeightChange,
      formatWeightToGoal
    }
  }
}
</script>

<style scoped>
.weight-statistics {
  @apply bg-white rounded-lg shadow-md p-6;
  position: relative;
}

.statistics-header {
  @apply mb-6;
}

.statistics-content {
  @apply space-y-6;
}

.goal-progress-section {
  @apply bg-blue-50 rounded-lg p-4 border border-blue-200;
}

.goal-progress-bar {
  @apply space-y-2;
}

.progress-bar {
  @apply w-full bg-gray-200 rounded-full h-3 overflow-hidden;
}

.progress-fill {
  @apply h-full transition-all duration-500 ease-out;
}

.progress-text {
  @apply flex justify-between items-center text-sm;
}

.progress-percentage {
  @apply font-semibold text-blue-600;
}

.progress-detail {
  @apply text-gray-600;
}

.weight-range-section {
  @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
}

.weight-range-grid {
  @apply grid grid-cols-3 gap-4;
}

.range-item {
  @apply text-center;
}

.range-label {
  @apply block text-xs text-gray-600 mb-1;
}

.range-value {
  @apply block text-lg font-semibold text-gray-900;
}

.current-status-section {
  @apply bg-green-50 rounded-lg p-4 border border-green-200;
}

.status-grid {
  @apply grid grid-cols-3 gap-4;
}

.status-item {
  @apply text-center;
}

.status-label {
  @apply block text-xs text-gray-600 mb-1;
}

.status-value {
  @apply block text-lg font-semibold text-gray-900;
}

.motivational-section {
  @apply mt-4;
}

.motivational-card {
  @apply bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 flex items-center;
}

.motivational-icon {
  @apply text-2xl mr-3;
}

.motivational-content {
  @apply flex-1;
}

.motivational-text {
  @apply text-sm font-medium text-gray-800;
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

.no-data-message {
  @apply text-center py-8;
}

@media (max-width: 640px) {
  .weight-range-grid,
  .status-grid {
    @apply grid-cols-1 gap-2;
  }
}
</style>
