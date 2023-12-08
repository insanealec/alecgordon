<script setup lang="ts">
import WorkExperience from '../WorkExperience.vue';
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <div class="w-full p-3">
    <h1>
      <RouterLink :to="{ name: 'home' }">Alec Gordon</RouterLink>
    </h1>
    <ThemeToggle />
    <div class="flex flex-col">
      <div class="flex flex-col">
        <RouterLink :to="{ name: 'ibotta' }">
          <WorkExperience>
            <template #name>Ibotta</template>
            <template #from>2021</template>
            <template #to>2023</template>
          </WorkExperience>
        </RouterLink>
        <div class="flex flex-col indent">
          <RouterLink to="/card-standardization">Card Standardization</RouterLink>
          <RouterLink to="/pagination">Pagination</RouterLink>
          <RouterLink to="/misc">Miscellaneous</RouterLink>
        </div>
        <RouterLink :to="{ name: 'mcalear' }">
          <WorkExperience>
            <template #name>The McAlear Group</template>
            <template #from>2015</template>
            <template #to>2021</template>
          </WorkExperience>
        </RouterLink>
        <a href="https://github.com/insanealec"><h4>Github &#128279;</h4></a>
        <RouterLink :to="{ name: 'betterlist'}">BetterList</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
