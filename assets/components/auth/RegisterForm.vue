<template>
  <div class="card max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Inscription</h2>
    
    <Alert
      v-if="error"
      type="error"
      :description="error"
      dismissible
      @dismiss="clearError"
    />
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="form-input"
          :disabled="isLoading"
        />
      </div>
      
      <div>
        <label for="password" class="form-label">Mot de passe</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="form-input"
          :disabled="isLoading"
        />
      </div>
      
      <BaseButton
        type="submit"
        variant="primary"
        :loading="isLoading"
        full-width
      >
        S'inscrire
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useAuthStore } from '../../store/modules/auth.js';
import BaseButton from '../shared/BaseButton.vue';
import Alert from '../shared/Alert.vue';

export default {
  name: 'RegisterForm',
  components: {
    BaseButton,
    Alert,
  },
  setup() {
    const authStore = useAuthStore();
    const form = reactive({
      email: '',
      password: '',
    });

    const isLoading = ref(false);
    const error = ref('');

    const handleSubmit = async () => {
      isLoading.value = true;
      error.value = '';
      
      try {
        await authStore.register(form);
        // Redirection après inscription réussie
        window.location.href = '/login';
      } catch (err) {
        error.value = err.response?.data?.error || 'Erreur d\'inscription';
      } finally {
        isLoading.value = false;
      }
    };

    const clearError = () => {
      error.value = '';
    };

    return {
      form,
      isLoading,
      error,
      handleSubmit,
      clearError,
    };
  },
};
</script> 