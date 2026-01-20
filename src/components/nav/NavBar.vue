<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
<div class="navbar border-b border-secondary">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="bg-base-100 border border-secondary menu menu-sm dropdown-content mt-3 z-30 p-2 shadow rounded-box w-52">
        <li>
          <summary>Side-projects</summary>
          <ul class="p-2">
            <li><RouterLink to="/betterlist">BetterList</RouterLink></li>
            <li><RouterLink to="/delivery">Delivery Optimization</RouterLink></li>
            <li><RouterLink to="/meet-and-eat">Meet and Eat</RouterLink></li>
            <li><RouterLink to="/cypher">Caesar Cypher</RouterLink></li>
            <li><RouterLink to="/form-builder">Form Builder</RouterLink></li>
          </ul>
        </li>
        <li><a href="https://github.com/insanealec/alecgordon" class="gap-0" target="_blank">Github <span class="text-sm">&#128279;</span></a></li>
      </ul>
    </div>
    <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl">Alec Gordon</RouterLink>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Side-projects</summary>
          <ul class="border border-secondary p-2 z-30">
            <li><RouterLink to="/betterlist">BetterList</RouterLink></li>
            <li><RouterLink to="/delivery">Delivery Optimization</RouterLink></li>
            <li><RouterLink to="/meet-and-eat">Meet and Eat</RouterLink></li>
            <li><RouterLink to="/cypher">Caesar Cypher</RouterLink></li>
            <li><RouterLink to="/form-builder">Form Builder</RouterLink></li>
          </ul>
        </details>
      </li>
      <li><a href="https://github.com/insanealec/alecgordon" class="gap-0" target="_blank">Github <span class="text-sm">&#128279;</span></a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <ThemeToggle />
  </div>
</div>
</template>