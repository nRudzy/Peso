import axios from 'axios';

// Configuration de base d'Axios
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Intercepteur pour ajouter le token JWT à chaque requête
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses et les erreurs
api.interceptors.response.use(
  (response) => {
    // Extraire automatiquement les données de la réponse standardisée
    if (response.data && response.data.data !== undefined) {
      return {
        ...response,
        data: response.data.data,
        metadata: response.data.metadata,
      };
    }
    return response;
  },
  (error) => {
    // Gestion des erreurs d'authentification
    if (error.response?.status === 401) {
      localStorage.removeItem('jwt_token');
      window.location.href = '/login';
    }
    
    // Gestion des erreurs de validation
    if (error.response?.status === 422) {
      return Promise.reject({
        ...error,
        validationErrors: error.response.data.errors,
      });
    }
    
    return Promise.reject(error);
  }
);

// Méthodes API spécifiques
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  profile: () => api.get('/auth/profile'),
  updateProfile: (data) => api.put('/auth/update-profile', data),
  changePassword: (data) => api.post('/auth/change-password', data),
};

export const userAPI = {
  getUsers: (page = 1, limit = 20) => api.get(`/users?page=${page}&limit=${limit}`),
  getPublicProfiles: (page = 1, limit = 20) => api.get(`/users/public?page=${page}&limit=${limit}`),
  getUser: (id) => api.get(`/users/${id}`),
};

export const weightAPI = {
  getEntries: (page = 1, limit = 50) => api.get(`/weight-entries?page=${page}&limit=${limit}`),
  getLatest: () => api.get('/weight-entries/latest'),
  createEntry: (data) => api.post('/weight-entries', data),
  getEntry: (id) => api.get(`/weight-entries/${id}`),
  updateEntry: (id, data) => api.put(`/weight-entries/${id}`, data),
  deleteEntry: (id) => api.delete(`/weight-entries/${id}`),
  getProgress: (days = 30) => api.get(`/weight-entries/stats/progress?days=${days}`),
};

// Export de l'instance Axios pour utilisation directe
export default api;

// Export global pour utilisation dans les composants Vue
window.api = api; 