<template>
  <div class="card">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Ajouter un poids</h3>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="weight" class="form-label">Poids (kg)</label>
        <input
          id="weight"
          v-model.number="form.weight"
          type="number"
          step="0.1"
          required
          class="form-input"
          :disabled="isLoading"
        />
      </div>
      
      <div>
        <label for="date" class="form-label">Date</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          class="form-input"
          :disabled="isLoading"
        />
      </div>
      
      <div>
        <label for="comment" class="form-label">Commentaire (optionnel)</label>
        <textarea
          id="comment"
          v-model="form.comment"
          rows="3"
          class="form-input"
          :disabled="isLoading"
        ></textarea>
      </div>
      
      <BaseButton
        type="submit"
        variant="primary"
        :loading="isLoading"
        full-width
      >
        Ajouter
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useWeightStore } from '../../store/modules/weight.js';
import BaseButton from '../shared/BaseButton.vue';

export default {
  name: 'JournalEntryForm',
  components: {
    BaseButton,
  },
  emits: ['entry-created'],
  setup(props, { emit }) {
    const weightStore = useWeightStore();
    const form = reactive({
      weight: null,
      date: new Date().toISOString().split('T')[0],
      comment: '',
    });

    const isLoading = ref(false);

    const handleSubmit = async () => {
      isLoading.value = true;
      
      try {
        await weightStore.createEntry(form);
        // Réinitialiser le formulaire
        form.weight = null;
        form.comment = '';
        form.date = new Date().toISOString().split('T')[0];
        
        // Émettre un événement de succès
        emit('entry-created');
      } catch (err) {
        console.error('Erreur lors de l\'ajout:', err);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      form,
      isLoading,
      handleSubmit,
    };
  },
};
</script> 