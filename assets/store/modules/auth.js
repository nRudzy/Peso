import { defineStore } from 'pinia';
import { authAPI } from '../../utils/api.js';
import { storage } from '../../utils/helpers.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: storage.get('jwt_token'),
    isLoading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token && !!state.user,
    userRole: (state) => state.user?.roles?.[0] || 'ROLE_USER',
    isAdmin: (state) => state.user?.roles?.includes('ROLE_ADMIN') || false,
  },

  actions: {
    async login(credentials) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await authAPI.login(credentials);
        this.token = response.data.token;
        this.user = response.data.user;
        
        // Stocker le token
        storage.set('jwt_token', this.token);
        
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de connexion';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async register(userData) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await authAPI.register(userData);
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur d\'inscription';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchProfile() {
      if (!this.token) return;
      
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await authAPI.profile();
        this.user = response.data.user;
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de récupération du profil';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async updateProfile(data) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await authAPI.updateProfile(data);
        this.user = response.data.user;
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de mise à jour du profil';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async changePassword(data) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await authAPI.changePassword(data);
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de changement de mot de passe';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      this.error = null;
      storage.remove('jwt_token');
      
      // Supprimer le cookie
      document.cookie = 'jwt_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
      
      // Rediriger vers la page d'accueil
      window.location.href = '/';
    },

    clearError() {
      this.error = null;
    },
  },
}); 