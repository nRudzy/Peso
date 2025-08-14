<template>
  <div class="bmi-chart-container" data-testid="bmi-chart">
    <div class="chart-header">
      <h3 class="text-lg font-semibold text-gray-900">Évolution de l'IMC</h3>
      <div class="chart-controls">
        <select v-model="selectedPeriod" data-testid="bmi-chart-period-select" @change="updateChart" class="form-select">
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
        <span class="stat-label">IMC actuel</span>
        <span class="stat-value" data-testid="bmi-value">{{ statistics.current_bmi }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Catégorie</span>
        <span class="stat-value" data-testid="bmi-category" :class="getBMICategoryClass(statistics.current_bmi)">
          {{ getBMICategory(statistics.current_bmi) }}
        </span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Moyenne IMC</span>
        <span class="stat-value">{{ statistics.average_bmi }}</span>
      </div>
    </div>
    
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>Chargement des données IMC...</p>
    </div>
    
    <div v-if="error" class="error-message">
      <p class="text-red-600">{{ error }}</p>
    </div>
    
    <div v-if="!userHeight" class="no-height-message">
      <p class="text-gray-500">
        Veuillez configurer votre taille dans votre profil pour voir l'évolution de votre IMC.
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import Chart from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import { weightEntriesApi } from '@/services/api'
import { calculate_bmi, get_bmi_category, get_bmi_color_class } from '@/utils/bmi-calculator'

export default {
  name: 'BMIChart',
  props: {
    userHeight: {
      type: Number,
      default: null
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
          
          // Define BMI category zones
          const bmiZones = [
            { min: 0, max: 18.5, color: 'rgba(255, 193, 7, 0.1)', borderColor: 'rgba(255, 193, 7, 0.5)' },
            { min: 18.5, max: 25, color: 'rgba(40, 167, 69, 0.1)', borderColor: 'rgba(40, 167, 69, 0.5)' },
            { min: 25, max: 30, color: 'rgba(255, 152, 0, 0.1)', borderColor: 'rgba(255, 152, 0, 0.5)' },
            { min: 30, max: 50, color: 'rgba(220, 53, 69, 0.1)', borderColor: 'rgba(220, 53, 69, 0.5)' }
          ]
          
          chart.value = new Chart(ctx, {
            type: 'line',
            data: {
              labels: data.labels,
              datasets: [{
                label: 'IMC',
                data: data.bmiValues.map((bmi, index) => ({
                  x: data.labels[index],
                  y: bmi,
                  weight: data.weights[index],
                  comment: data.comments[index]
                })),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: false,
                tension: 0.4,
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
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
                      const bmi = context.parsed.y
                      const weight = context.raw.weight
                      const comment = context.raw.comment
                      let label = `IMC: ${bmi.toFixed(1)}`
                      if (weight) {
                        label += ` (${weight} kg)`
                      }
                      if (comment && comment.trim()) {
                        label += ` - ${comment}`
                      }
                      return label
                    },
                    afterLabel: function(context) {
                      const bmi = context.parsed.y
                      const category = get_bmi_category(bmi)
                      return `Catégorie: ${category}`
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
                    text: 'IMC'
                  },
                  min: 15,
                  max: 40,
                  ticks: {
                    callback: function(value) {
                      return value.toFixed(1)
                    }
                  },
                  grid: {
                    color: function(context) {
                      const value = context.tick.value
                      if (value === 18.5 || value === 25 || value === 30) {
                        return 'rgba(0, 0, 0, 0.2)'
                      }
                      return 'rgba(0, 0, 0, 0.1)'
                    },
                    lineWidth: function(context) {
                      const value = context.tick.value
                      if (value === 18.5 || value === 25 || value === 30) {
                        return 2
                      }
                      return 1
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
    
    const fetchBMIData = async () => {
      if (!props.userHeight) {
        error.value = 'Taille non configurée'
        statistics.value = {
          current_bmi: 0,
          average_bmi: 0
        }
        destroyChart()
        return
      }
      
      loading.value = true
      error.value = null
      
      try {
        const response = await weightEntriesApi.getWeightProgress(selectedPeriod.value)
        const data = response.data
        
        // Check if we have data
        if (!data.entries || data.entries.length === 0) {
          statistics.value = {
            current_bmi: 0,
            average_bmi: 0
          }
          destroyChart()
          return
        }
        
        // Calculate BMI for each entry
        const bmiData = data.entries.map(entry => {
          try {
            return calculate_bmi(entry.weight, props.userHeight)
          } catch (err) {
            return null
          }
        }).filter(bmi => bmi !== null)
        
        // Format data for chart
        const chartData = {
          labels: data.entries.map(entry => new Date(entry.date)).filter(date => !isNaN(date.getTime())),
          weights: data.entries.map(entry => entry.weight).filter(weight => weight !== null && weight !== undefined),
          bmiValues: bmiData,
          comments: data.entries.map(entry => entry.comment || '').filter((_, index) => !isNaN(new Date(data.entries[index].date).getTime()))
        }
        
        // Ensure we have valid data
        if (chartData.labels.length === 0 || chartData.bmiValues.length === 0) {
          statistics.value = {
            current_bmi: 0,
            average_bmi: 0
          }
          destroyChart()
          return
        }
        
        // Calculate statistics
        const currentBMI = chartData.bmiValues[0]
        const averageBMI = chartData.bmiValues.reduce((sum, bmi) => sum + bmi, 0) / chartData.bmiValues.length
        
        statistics.value = {
          current_bmi: currentBMI.toFixed(1),
          average_bmi: averageBMI.toFixed(1)
        }
        
        createChart(chartData)
      } catch (err) {
        error.value = err.message || 'Erreur lors du chargement des données IMC'
        console.error('Error fetching BMI data:', err)
        
        // Set default statistics on error
        statistics.value = {
          current_bmi: 0,
          average_bmi: 0
        }
        destroyChart()
      } finally {
        loading.value = false
      }
    }
    
    const updateChart = () => {
      // Prevent multiple simultaneous updates
      if (loading.value) return
      fetchBMIData()
    }
    
    // Public method to force refresh
    const refresh = () => {
      fetchBMIData()
    }
    
    const getBMICategory = (bmi) => {
      if (!bmi || bmi === 0) return 'N/A'
      try {
        return get_bmi_category(parseFloat(bmi))
      } catch (err) {
        return 'N/A'
      }
    }
    
    const getBMICategoryClass = (bmi) => {
      if (!bmi || bmi === 0) return 'text-gray-600'
      try {
        return get_bmi_color_class(parseFloat(bmi))
      } catch (err) {
        return 'text-gray-600'
      }
    }
    
    // Watch for changes in userHeight prop
    watch(() => props.userHeight, (newHeight, oldHeight) => {
      if (newHeight && newHeight !== oldHeight) {
        // User height has changed, reload BMI data
        fetchBMIData()
      }
    }, { immediate: true })
    
    onMounted(() => {
      // Initial load will be handled by the watcher
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
      refresh,
      getBMICategory,
      getBMICategoryClass
    }
  }
}
</script>

<style scoped>
.bmi-chart-container {
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

.no-height-message {
  @apply mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-center;
}

@media (max-width: 640px) {
  .chart-stats {
    @apply grid-cols-1 gap-2;
  }
}
</style>
