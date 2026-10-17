<script setup lang="ts">
import NavBar from './nav/NavBar.vue';
</script>

<template>
  <div class="container mt-4 mx-auto px-1 sm:px-0 md:px-2 lg:px-8">
    <header>
      <NavBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
