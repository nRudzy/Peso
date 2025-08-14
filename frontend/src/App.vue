<template>
  <div id="app">
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Peso - Suivi de Poids</h1>
        <nav class="flex space-x-4">
          <a href="#" class="hover:text-blue-200">Accueil</a>
          <a href="#" class="hover:text-blue-200">Profil</a>
          <a href="#" class="hover:text-blue-200">Déconnexion</a>
        </nav>
      </div>
    </header>
    
    <main class="container mx-auto p-4">
      <Dashboard />
    </main>
  </div>
</template>

<script>
import Dashboard from '@/views/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
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
