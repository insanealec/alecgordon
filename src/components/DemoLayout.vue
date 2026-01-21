<script setup lang="ts">
import NavBar from './nav/NavBar.vue';
</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
