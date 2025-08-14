import axios from 'axios'

// Get API URL from environment variables
// In development, this will use the proxy configuration
// In production, this will use the actual API URL
const getApiUrl = () => {
  // In development, use relative URL to leverage Vite proxy
  if (import.meta.env.DEV) {
    return '/api'
  }
  
  // In production, use the full API URL from environment
  return import.meta.env.VITE_API_URL || '/api'
}

// Create axios instance with base configuration
const api = axios.create({
  baseURL: getApiUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      // Redirect to login if needed
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API service functions
export const weightEntriesApi = {
  // Get all weight entries for current user
  async getWeightEntries() {
    return api.get('/v1/weight-entries')
  },

  // Create new weight entry
  async createWeightEntry(data) {
    return api.post('/v1/weight-entries', data)
  },

  // Update weight entry
  async updateWeightEntry(id, data) {
    return api.put(`/v1/weight-entries/${id}`, data)
  },

  // Delete weight entry
  async deleteWeightEntry(id) {
    return api.delete(`/v1/weight-entries/${id}`)
  }
}

export const authApi = {
  // Login user
  async login(credentials) {
    return api.post('/v1/auth/login', credentials)
  },

  // Register user
  async register(userData) {
    return api.post('/v1/auth/register', userData)
  },

  // Get current user
  async getCurrentUser() {
    return api.get('/v1/users/me')
  },

  // Logout user
  async logout() {
    return api.post('/v1/auth/logout')
  }
}

export default api
