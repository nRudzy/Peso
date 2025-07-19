import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Configuration globale de Vue
const app = createApp({});

// Installation de Pinia
const pinia = createPinia();
app.use(pinia);

// Configuration globale des composants
app.config.globalProperties.$api = window.api; // Sera défini dans api.js

// Gestion des erreurs globales
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err);
  console.error('Component:', vm);
  console.error('Info:', info);
};

// Export pour utilisation dans app.js
window.createApp = createApp; 