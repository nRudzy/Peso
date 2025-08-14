<template>
  <div class="profile-edit">
    <div class="profile-edit-header">
      <h1 class="text-2xl font-bold text-gray-900">
        Modifier le Profil
      </h1>
      <p class="text-gray-600">
        Mettez à jour vos informations personnelles
      </p>
    </div>

    <div class="profile-edit-content">
      <form
        v-if="userProfile"
        @submit.prevent="saveProfile"
        class="profile-form"
        data-testid="profile-edit-form"
      >
        <!-- Personal Information Section -->
        <div class="form-section">
          <h3 class="section-title">Informations Personnelles</h3>
          
          <div class="form-grid">
            <div class="form-group">
              <label for="firstName" class="form-label">Prénom *</label>
              <input
                id="firstName"
                v-model="form.first_name"
                type="text"
                class="form-input"
                :class="{ 'error': errors.first_name }"
                required
                data-testid="first-name-input"
              />
              <span v-if="errors.first_name" class="error-message">
                {{ errors.first_name }}
              </span>
            </div>

            <div class="form-group">
              <label for="lastName" class="form-label">Nom *</label>
              <input
                id="lastName"
                v-model="form.last_name"
                type="text"
                class="form-input"
                :class="{ 'error': errors.last_name }"
                required
                data-testid="last-name-input"
              />
              <span v-if="errors.last_name" class="error-message">
                {{ errors.last_name }}
              </span>
            </div>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ 'error': errors.email }"
              required
              data-testid="email-input"
            />
            <span v-if="errors.email" class="error-message">
              {{ errors.email }}
            </span>
          </div>
        </div>

        <!-- Physical Information Section -->
        <div class="form-section">
          <h3 class="section-title">Informations Physiques</h3>
          
          <div class="form-grid">
            <div class="form-group">
              <label for="height" class="form-label">Taille *</label>
              <div class="input-group">
                <input
                  id="height"
                  v-model.number="form.height"
                  type="number"
                  step="0.1"
                  min="0"
                  class="form-input"
                  :class="{ 'error': errors.height }"
                  required
                  data-testid="height-input"
                />
                <select
                  v-model="form.height_unit"
                  class="form-select"
                  data-testid="height-unit-select"
                >
                  <option value="cm">cm</option>
                  <option value="in">pouces</option>
                </select>
              </div>
              <span v-if="errors.height" class="error-message">
                {{ errors.height }}
              </span>
            </div>

            <div class="form-group">
              <label for="weightUnit" class="form-label">Unité de poids *</label>
              <select
                id="weightUnit"
                v-model="form.weight_unit"
                class="form-input"
                :class="{ 'error': errors.weight_unit }"
                required
                data-testid="weight-unit-select"
              >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
              <span v-if="errors.weight_unit" class="error-message">
                {{ errors.weight_unit }}
              </span>
            </div>
          </div>
        </div>

        <!-- Weight Goals Section -->
        <div class="form-section">
          <h3 class="section-title">Objectifs de Poids</h3>
          
          <div class="form-grid">
            <div class="form-group">
              <label for="initialWeight" class="form-label">Poids initial *</label>
              <input
                id="initialWeight"
                v-model.number="form.initial_weight"
                type="number"
                step="0.1"
                min="0"
                class="form-input"
                :class="{ 'error': errors.initial_weight }"
                required
                data-testid="initial-weight-input"
              />
              <span v-if="errors.initial_weight" class="error-message">
                {{ errors.initial_weight }}
              </span>
            </div>

            <div class="form-group">
              <label for="targetWeight" class="form-label">Poids objectif *</label>
              <input
                id="targetWeight"
                v-model.number="form.target_weight"
                type="number"
                step="0.1"
                min="0"
                class="form-input"
                :class="{ 'error': errors.target_weight }"
                required
                data-testid="target-weight-input"
              />
              <span v-if="errors.target_weight" class="error-message">
                {{ errors.target_weight }}
              </span>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="button"
            @click="goBack"
            class="btn-secondary"
            data-testid="cancel-button"
          >
            Annuler
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="btn-primary"
            data-testid="save-button"
          >
            <span v-if="loading" class="loading-spinner"></span>
            {{ loading ? 'Enregistrement...' : 'Enregistrer' }}
          </button>
        </div>
      </form>

      <!-- Loading State -->
      <div v-else-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Chargement du profil...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <p class="error-message">{{ error }}</p>
        <button @click="loadUserProfile" class="btn-primary">
          Réessayer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { authApi } from '@/services/api'

export default {
  name: 'ProfileEdit',
  setup() {
    const userProfile = ref(null)
    const loading = ref(false)
    const error = ref(null)
    const errors = reactive({})

    const form = reactive({
      first_name: '',
      last_name: '',
      email: '',
      height: null,
      height_unit: 'cm',
      weight_unit: 'kg',
      initial_weight: null,
      target_weight: null
    })

    const loadUserProfile = async () => {
      loading.value = true
      error.value = null
      
      try {
        const response = await authApi.getCurrentUser()
        userProfile.value = response.data
        
        // Populate form with current values
        Object.assign(form, {
          first_name: response.data.first_name || '',
          last_name: response.data.last_name || '',
          email: response.data.email || '',
          height: response.data.height || null,
          height_unit: response.data.height_unit || 'cm',
          weight_unit: response.data.weight_unit || 'kg',
          initial_weight: response.data.initial_weight || null,
          target_weight: response.data.target_weight || null
        })
      } catch (err) {
        error.value = 'Erreur lors du chargement du profil'
        console.error('Error loading user profile:', err)
      } finally {
        loading.value = false
      }
    }

    const validateForm = () => {
      const newErrors = {}
      
      if (!form.first_name?.trim()) {
        newErrors.first_name = 'Le prénom est requis'
      }
      
      if (!form.last_name?.trim()) {
        newErrors.last_name = 'Le nom est requis'
      }
      
      if (!form.email?.trim()) {
        newErrors.email = 'L\'email est requis'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = 'Format d\'email invalide'
      }
      
      if (!form.height || form.height <= 0) {
        newErrors.height = 'La taille doit être supérieure à 0'
      }
      
      if (!form.initial_weight || form.initial_weight <= 0) {
        newErrors.initial_weight = 'Le poids initial doit être supérieur à 0'
      }
      
      if (!form.target_weight || form.target_weight <= 0) {
        newErrors.target_weight = 'Le poids objectif doit être supérieur à 0'
      }
      
      // Clear previous errors
      Object.keys(errors).forEach(key => delete errors[key])
      
      // Set new errors
      Object.assign(errors, newErrors)
      
      return Object.keys(newErrors).length === 0
    }

    const saveProfile = async () => {
      if (!validateForm()) {
        return
      }
      
      loading.value = true
      error.value = null
      
      try {
        await authApi.updateProfile(form)
        
        // Show success message (you could add a toast notification here)
        alert('Profil mis à jour avec succès!')
        
        // Navigate back to dashboard
        goBack()
      } catch (err) {
        error.value = 'Erreur lors de la mise à jour du profil'
        console.error('Error updating profile:', err)
      } finally {
        loading.value = false
      }
    }

    const goBack = () => {
      // Navigate back to dashboard
      window.history.back()
    }

    onMounted(() => {
      loadUserProfile()
    })

    return {
      userProfile,
      form,
      loading,
      error,
      errors,
      loadUserProfile,
      saveProfile,
      goBack
    }
  }
}
</script>

<style scoped>
.profile-edit {
  @apply max-w-4xl mx-auto p-6;
}

.profile-edit-header {
  @apply mb-8;
}

.profile-edit-content {
  @apply bg-white rounded-lg shadow-md;
}

.profile-form {
  @apply p-6;
}

.form-section {
  @apply mb-8;
}

.section-title {
  @apply text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200;
}

.form-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.form-group {
  @apply mb-4;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

.form-input {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.form-input.error {
  @apply border-red-500 focus:ring-red-500 focus:border-red-500;
}

.form-select {
  @apply px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white;
}

.input-group {
  @apply flex;
}

.input-group .form-input {
  @apply rounded-r-none;
}

.input-group .form-select {
  @apply rounded-l-none border-l-0;
}

.error-message {
  @apply text-sm text-red-600 mt-1;
}

.form-actions {
  @apply flex justify-end space-x-4 pt-6 border-t border-gray-200;
}

.btn-primary {
  @apply px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center;
}

.btn-secondary {
  @apply px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2;
}

.loading-spinner {
  @apply inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2;
}

.loading-state {
  @apply flex flex-col items-center justify-center p-12;
}

.error-state {
  @apply flex flex-col items-center justify-center p-12;
}

.error-state .error-message {
  @apply text-lg text-red-600 mb-4;
}
</style>
