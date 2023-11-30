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
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
