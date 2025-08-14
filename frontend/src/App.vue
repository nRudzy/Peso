<template>
  <div id="app">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-2xl font-bold">Peso - Suivi de Poids</h1>
    </header>
    
    <main class="container mx-auto p-4">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Bienvenue sur Peso</h2>
        <p class="text-gray-600 mb-4">
          Application de suivi de poids en cours de développement.
        </p>
        <div class="bg-blue-50 border border-blue-200 rounded p-4">
          <h3 class="font-semibold text-blue-800 mb-2">Services disponibles :</h3>
          <ul class="text-blue-700 space-y-1">
            <li>• Backend API : <a href="http://localhost:8000/docs" class="underline" target="_blank">Documentation</a></li>
            <li>• Frontend : Cette page</li>
            <li>• Mailpit : <a href="http://localhost:8025" class="underline" target="_blank">Emails de test</a></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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
