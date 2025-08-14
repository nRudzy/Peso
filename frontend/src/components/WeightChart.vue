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
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import { weightEntriesApi } from '@/services/api'

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
    
    const destroyChart = () => {
      if (chart.value) {
        try {
          chart.value.destroy()
        } catch (e) {
          console.warn('Error destroying chart:', e)
        }
        chart.value = null
      }
    }
    
    const createChart = (data) => {
      // Destroy existing chart
      destroyChart()
      
      // Add a small delay to ensure complete destruction
      setTimeout(() => {
        if (!chartCanvas.value) return
        
        try {
          // Clear the canvas
          const ctx = chartCanvas.value.getContext('2d')
          if (ctx) {
            ctx.clearRect(0, 0, chartCanvas.value.width, chartCanvas.value.height)
          }
          
          // Double check that canvas is still valid
          if (!chartCanvas.value || !ctx) {
            console.warn('Canvas not available for chart creation')
            return
          }
          
          chart.value = new Chart(ctx, {
            type: 'line',
            data: {
              labels: data.labels,
              datasets: [{
                label: `Poids (${props.weightUnit})`,
                data: data.weights.map((weight, index) => ({
                  x: data.labels[index],
                  y: weight,
                  comment: data.comments[index]
                })),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                spanGaps: true
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: false,
              transitions: {
                active: {
                  animation: {
                    duration: 0
                  }
                }
              },
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                  callbacks: {
                    title: function(context) {
                      const date = new Date(context[0].parsed.x)
                      return date.toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })
                    },
                    label: function(context) {
                      const weight = context.parsed.y
                      const comment = context.raw.comment
                      let label = `${weight} ${props.weightUnit}`
                      if (comment && comment.trim()) {
                        label += ` - ${comment}`
                      }
                      return label
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
                      day: 'dd/MM'
                    },
                    tooltipFormat: 'dd/MM/yyyy'
                  },
                  title: {
                    display: true,
                    text: 'Date'
                  },
                  ticks: {
                    callback: function(value) {
                      const date = new Date(value)
                      return date.toLocaleDateString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit'
                      })
                    }
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
        } catch (e) {
          console.error('Error creating chart:', e)
        }
      })
    }
    
    const fetchWeightData = async () => {
      loading.value = true
      error.value = null
      
      try {
        const response = await weightEntriesApi.getWeightProgress(selectedPeriod.value)
        const data = response.data
        
        // Check if we have data
        if (!data.entries || data.entries.length === 0) {
          statistics.value = {
            current_weight: 0,
            weight_change: 0,
            average_weight: 0
          }
          destroyChart()
          return
        }
        
        // Format data for chart
        const chartData = {
          labels: data.entries.map(entry => new Date(entry.date)).filter(date => !isNaN(date.getTime())),
          weights: data.entries.map(entry => entry.weight).filter(weight => weight !== null && weight !== undefined),
          comments: data.entries.map(entry => entry.comment || '').filter((_, index) => !isNaN(new Date(data.entries[index].date).getTime()))
        }
        
        // Ensure we have valid data
        if (chartData.labels.length === 0 || chartData.weights.length === 0) {
          statistics.value = {
            current_weight: 0,
            weight_change: 0,
            average_weight: 0
          }
          destroyChart()
          return
        }
        
        statistics.value = {
          current_weight: data.entries[0]?.weight || 0,
          weight_change: data.weight_change || 0,
          average_weight: data.average_weight || 0
        }
        
        createChart(chartData)
      } catch (err) {
        error.value = err.message || 'Erreur lors du chargement des données'
        console.error('Error fetching weight data:', err)
        
        // Set default statistics on error
        statistics.value = {
          current_weight: 0,
          weight_change: 0,
          average_weight: 0
        }
        destroyChart()
      } finally {
        loading.value = false
      }
    }
    
    const updateChart = () => {
      // Prevent multiple simultaneous updates
      if (loading.value) return
      fetchWeightData()
    }
    
    const formatWeightChange = (change) => {
      if (change === null || change === undefined) return '0'
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
      destroyChart()
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
  @apply mt-4 p-3 bg-red-50 border border-red-200 rounded-md;
}
</style>
