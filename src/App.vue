<script setup lang="ts">
import NavBar from './components/nav/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main class="container mt-4 mx-auto px-1 sm:px-0 md:px-2 lg:px-8">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
</style>
