<template>
  <div class="weight-chart-container">
    <div class="chart-header">
      <h3 class="text-lg font-semibold text-gray-900">Progression du Poids</h3>
      <div class="chart-controls">
        <select v-model="selectedPeriod" @change="updateChart" class="form-select">
          <option value="7">7 jours</option>
          <option value="30">30 jours</option>
          <option value="90">90 jours</option>
          <option value="365">1 an</option>
        </select>
      </div>
    </div>
    
    <div class="chart-wrapper">
      <canvas ref="chartCanvas" width="400" height="200"></canvas>
    </div>
    
    <div class="chart-stats" v-if="statistics">
      <div class="stat-item">
        <span class="stat-label">Poids actuel</span>
        <span class="stat-value">{{ statistics.current_weight }} {{ weightUnit }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Variation</span>
        <span class="stat-value" :class="weightChangeClass">
          {{ formatWeightChange(statistics.weight_change) }}
        </span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Moyenne</span>
        <span class="stat-value">{{ statistics.average_weight }} {{ weightUnit }}</span>
      </div>
    </div>
    
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>Chargement des données...</p>
    </div>
    
    <div v-if="error" class="error-message">
      <p class="text-red-600">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Chart from 'chart.js/auto'

export default {
  name: 'WeightChart',
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
    const chartCanvas = ref(null)
    const chart = ref(null)
    const selectedPeriod = ref(30)
    const loading = ref(false)
    const error = ref(null)
    const statistics = ref(null)
    
    const createChart = (data) => {
      if (chart.value) {
        chart.value.destroy()
      }
      
      const ctx = chartCanvas.value.getContext('2d')
      
      chart.value = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: `Poids (${props.weightUnit})`,
            data: data.weights,
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgb(59, 130, 246)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              callbacks: {
                title: function(context) {
                  return context[0].label
                },
                label: function(context) {
                  return `${context.parsed.y} ${props.weightUnit}`
                }
              }
            }
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'DD/MM'
                }
              },
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              title: {
                display: true,
                text: `Poids (${props.weightUnit})`
              },
              ticks: {
                callback: function(value) {
                  return value + ' ' + props.weightUnit
                }
              }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
          }
        }
      })
    }
    
    const fetchWeightData = async () => {
      loading.value = true
      error.value = null
      
      try {
        const response = await fetch(`/api/v1/weight-entries/progress/${selectedPeriod.value}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données')
        }
        
        const data = await response.json()
        
        // Format data for chart
        const chartData = {
          labels: data.entries.map(entry => new Date(entry.date)),
          weights: data.entries.map(entry => entry.weight)
        }
        
        statistics.value = {
          current_weight: data.entries[0]?.weight || 0,
          weight_change: data.weight_change,
          average_weight: data.average_weight
        }
        
        createChart(chartData)
      } catch (err) {
        error.value = err.message
        console.error('Error fetching weight data:', err)
      } finally {
        loading.value = false
      }
    }
    
    const updateChart = () => {
      fetchWeightData()
    }
    
    const formatWeightChange = (change) => {
      if (change === 0) return '0'
      const sign = change > 0 ? '+' : ''
      return `${sign}${change.toFixed(1)} ${props.weightUnit}`
    }
    
    const weightChangeClass = computed(() => {
      if (!statistics.value) return ''
      const change = statistics.value.weight_change
      if (change > 0) return 'text-red-600'
      if (change < 0) return 'text-green-600'
      return 'text-gray-600'
    })
    
    onMounted(() => {
      fetchWeightData()
    })
    
    onUnmounted(() => {
      if (chart.value) {
        chart.value.destroy()
      }
    })
    
    return {
      chartCanvas,
      selectedPeriod,
      loading,
      error,
      statistics,
      updateChart,
      formatWeightChange,
      weightChangeClass
    }
  }
}
</script>

<style scoped>
.weight-chart-container {
  @apply bg-white rounded-lg shadow-md p-6;
  position: relative;
}

.chart-header {
  @apply flex justify-between items-center mb-4;
}

.chart-controls {
  @apply flex gap-2;
}

.form-select {
  @apply px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.chart-wrapper {
  @apply relative mb-4;
  height: 300px;
}

.chart-stats {
  @apply grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200;
}

.stat-item {
  @apply text-center;
}

.stat-label {
  @apply block text-sm text-gray-600 mb-1;
}

.stat-value {
  @apply block text-lg font-semibold text-gray-900;
}

.loading-overlay {
  @apply absolute inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-center;
  z-index: 10;
}

.loading-spinner {
  @apply w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-2;
}

.error-message {
  @apply mt-4 p-4 bg-red-50 border border-red-200 rounded-md;
}
</style>
