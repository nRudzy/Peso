import { defineStore } from 'pinia';
import { weightAPI } from '../../utils/api.js';

export const useWeightStore = defineStore('weight', {
  state: () => ({
    entries: [],
    latestEntry: null,
    progress: [],
    summary: null,
    pagination: null,
    isLoading: false,
    error: null,
  }),

  getters: {
    totalEntries: (state) => state.entries.length,
    currentWeight: (state) => state.latestEntry?.weight || null,
    hasEntries: (state) => state.entries.length > 0,
    sortedEntries: (state) => [...state.entries].sort((a, b) => new Date(b.date) - new Date(a.date)),
  },

  actions: {
    async fetchEntries(page = 1, limit = 50) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await weightAPI.getEntries(page, limit);
        this.entries = response.data;
        this.pagination = response.metadata;
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de récupération des entrées';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchLatestEntry() {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await weightAPI.getLatest();
        this.latestEntry = response.data.entry;
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de récupération de la dernière entrée';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async createEntry(entryData) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await weightAPI.createEntry(entryData);
        // Ajouter la nouvelle entrée à la liste
        this.entries.unshift(response.data.entry);
        // Mettre à jour la dernière entrée si nécessaire
        if (!this.latestEntry || new Date(entryData.date) > new Date(this.latestEntry.date)) {
          this.latestEntry = response.data.entry;
        }
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de création de l\'entrée';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async updateEntry(id, entryData) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await weightAPI.updateEntry(id, entryData);
        // Mettre à jour l'entrée dans la liste
        const index = this.entries.findIndex(entry => entry.id === id);
        if (index !== -1) {
          this.entries[index] = response.data.entry;
        }
        // Mettre à jour la dernière entrée si nécessaire
        if (this.latestEntry?.id === id) {
          this.latestEntry = response.data.entry;
        }
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de mise à jour de l\'entrée';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteEntry(id) {
      this.isLoading = true;
      this.error = null;
      
      try {
        await weightAPI.deleteEntry(id);
        // Supprimer l'entrée de la liste
        this.entries = this.entries.filter(entry => entry.id !== id);
        // Mettre à jour la dernière entrée si nécessaire
        if (this.latestEntry?.id === id) {
          this.latestEntry = this.entries[0] || null;
        }
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de suppression de l\'entrée';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchProgress(days = 30) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await weightAPI.getProgress(days);
        this.progress = response.data.progress;
        this.summary = response.data.summary;
        return response;
      } catch (error) {
        this.error = error.response?.data?.error || 'Erreur de récupération du progrès';
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    clearError() {
      this.error = null;
    },

    clearEntries() {
      this.entries = [];
      this.latestEntry = null;
      this.progress = [];
      this.summary = null;
      this.pagination = null;
    },
  },
}); 