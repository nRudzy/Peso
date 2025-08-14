<template>
  <div id="app">
    <div v-if="isAuthenticated">
      <header class="bg-blue-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold">
            Peso - Suivi de Poids
          </h1>
          <nav class="flex space-x-4">
            <router-link
              to="/"
              class="hover:text-blue-200"
            >Accueil</router-link>
            <router-link
              to="/profile/edit"
              class="hover:text-blue-200"
            >Profil</router-link>
            <a
              href="#"
              class="hover:text-blue-200"
              @click="logout"
            >Déconnexion</a>
          </nav>
        </div>
      </header>
      
      <main class="container mx-auto p-4">
        <router-view />
      </main>
    </div>
    
    <router-view v-else />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const isAuthenticated = ref(false)

    const checkAuth = () => {
      const token = localStorage.getItem('token')
      isAuthenticated.value = !!token
    }

    const logout = () => {
      localStorage.removeItem('token')
      isAuthenticated.value = false
      router.push('/login')
    }

    // Watch for route changes to update authentication status
    watch(() => router.currentRoute.value, () => {
      checkAuth()
    })

    onMounted(() => {
      checkAuth()
    })

    return {
      isAuthenticated,
      logout
    }
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f3f4f6;
}
</style>
