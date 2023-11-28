<script setup lang="ts">
import WorkExperience from '../WorkExperience.vue';
</script>

<template>
  <div class="p-3">
    <h1 class="text-green-100">Alec Gordon</h1>
    <div class="flex flex-col">
      <p>Experiences</p>
      <div class="flex flex-col indent">
        <WorkExperience>
          <template #name>Ibotta</template>
          <template #from>2021</template>
          <template #to>2023</template>
        </WorkExperience>
        <div class="flex flex-col indent">
          <p>Card Standardization</p>
          <p>Pagination</p>
          <p>Price Comparison</p>
        </div>
        <p>The McAlear Group</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  .indent {
    padding-left: 2rem;
  }
</style>
