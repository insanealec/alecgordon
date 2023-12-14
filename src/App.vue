<script setup lang="ts">
import NavBar from './components/nav/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main class="py-8 px-2">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
/* header, main {
  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
} */
</style>
