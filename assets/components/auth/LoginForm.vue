<template>
  <div class="card max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Connexion</h2>
    
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
        Se connecter
      </BaseButton>
    </form>
    
    <div class="mt-4 text-center">
      <p class="text-sm text-gray-600">
        Pas encore de compte ?
        <a href="/register" class="text-primary-600 hover:text-primary-700">
          S'inscrire
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useAuthStore } from '../../store/modules/auth.js';
import BaseButton from '../shared/BaseButton.vue';
import Alert from '../shared/Alert.vue';

export default {
  name: 'LoginForm',
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

    const setCookie = (name, value, days = 7) => {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    };

    const handleSubmit = async () => {
      isLoading.value = true;
      error.value = '';
      
      try {
        const response = await authStore.login(form);
        
        // Stocker le token dans un cookie pour les routes web
        setCookie('jwt_token', response.data.token);
        
        // Redirection après connexion réussie
        window.location.href = '/dashboard';
      } catch (err) {
        error.value = err.response?.data?.error || 'Erreur de connexion';
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