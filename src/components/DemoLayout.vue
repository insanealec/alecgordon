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

<script setup>
import NavBar from './nav/NavBar.vue';
</script>
