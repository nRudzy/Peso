<template>
  <div class="card">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900">Progression du poids</h3>
      <div class="flex items-center space-x-2">
        <select
          v-model="selectedPeriod"
          class="form-input text-sm py-1"
          @change="fetchProgress"
        >
          <option value="7">7 jours</option>
          <option value="30">30 jours</option>
          <option value="90">90 jours</option>
        </select>
      </div>
    </div>

    <LoadingSpinner v-if="isLoading" class="w-8 h-8 mx-auto" />
    
    <div v-else-if="!hasData" class="text-center py-8">
      <p class="text-gray-500">Aucune donnée disponible</p>
      <p class="text-sm text-gray-400 mt-2">Ajoutez votre premier poids pour commencer</p>
    </div>
    
    <div v-else class="space-y-4">
      <!-- Graphique -->
      <div class="h-64">
        <canvas ref="chartCanvas"></canvas>
      </div>
      
      <!-- Résumé -->
      <div v-if="summary" class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
        <div class="text-center">
          <p class="text-2xl font-bold text-primary-600">{{ formatNumber(summary.currentWeight) }}</p>
          <p class="text-sm text-gray-500">Poids actuel</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold text-success-600">{{ formatNumber(summary.totalWeightLoss) }}</p>
          <p class="text-sm text-gray-500">Perte totale</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold text-warning-600">{{ formatNumber(summary.remainingWeight) }}</p>
          <p class="text-sm text-gray-500">Reste à perdre</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold text-gray-600">{{ formatNumber(summary.targetWeight) }}</p>
          <p class="text-sm text-gray-500">Objectif</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
import { useWeightStore } from '../../store/modules/weight.js';
import { formatNumber } from '../../utils/helpers.js';
import LoadingSpinner from '../shared/LoadingSpinner.vue';

export default {
  name: 'WeightProgressChart',
  components: {
    LoadingSpinner,
  },
  props: {
    userId: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const weightStore = useWeightStore();
    const chartCanvas = ref(null);
    const selectedPeriod = ref(30);
    let chart = null;

    const isLoading = computed(() => weightStore.isLoading);
    const progress = computed(() => weightStore.progress);
    const summary = computed(() => weightStore.summary);
    const hasData = computed(() => progress.value.length > 0);

    const fetchProgress = async () => {
      try {
        await weightStore.fetchProgress(selectedPeriod.value);
        updateChart();
      } catch (error) {
        console.error('Erreur lors du chargement du progrès:', error);
      }
    };

    const updateChart = () => {
      if (!chartCanvas.value || !hasData.value) return;

      const ctx = chartCanvas.value.getContext('2d');
      
      // Détruire le graphique existant
      if (chart) {
        chart.destroy();
      }

      const labels = progress.value.map(entry => entry.date);
      const weights = progress.value.map(entry => entry.weight);
      const bmis = progress.value.map(entry => entry.bmi);

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Poids (kg)',
              data: weights,
              borderColor: '#0ea5e9',
              backgroundColor: 'rgba(14, 165, 233, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              yAxisID: 'y',
            },
            {
              label: 'BMI',
              data: bmis,
              borderColor: '#22c55e',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              yAxisID: 'y1',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Poids (kg)',
              },
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'BMI',
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.dataset.label || '';
                  const value = context.parsed.y;
                  return `${label}: ${formatNumber(value)}`;
                },
              },
            },
          },
        },
      });
    };

    onMounted(() => {
      fetchProgress();
    });

    watch(progress, updateChart, { deep: true });

    return {
      chartCanvas,
      selectedPeriod,
      isLoading,
      progress,
      summary,
      hasData,
      fetchProgress,
      formatNumber,
    };
  },
};
</script> 