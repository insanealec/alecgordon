<script setup lang="ts">
import TheWelcome from './components/TheWelcome.vue'
import SideNav from './components/nav/SideNav.vue'
</script>

<template>
  <header>
    <SideNav></SideNav>
  </header>

  <main>
    <TheWelcome />
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
    padding-right: 4rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
