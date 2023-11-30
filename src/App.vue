<script setup lang="ts">
import SideNav from './components/nav/SideNav.vue'
</script>

<template>
  <header>
    <SideNav></SideNav>
  </header>

  <main class="py-8 px-2">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
</style>
