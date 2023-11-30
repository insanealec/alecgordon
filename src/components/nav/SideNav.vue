<script setup lang="ts">
import WorkExperience from '../WorkExperience.vue';
</script>

<template>
  <div class="w-full p-3">
    <RouterLink :to="{ name: 'home' }">
      <h1>Alec Gordon</h1>
    </RouterLink>
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
          <p>Pagination</p>
          <p>Price Comparison</p>
        </div>
        <RouterLink :to="{ name: 'mcalear' }">
          <WorkExperience>
            <template #name>The McAlear Group</template>
            <template #from>2015</template>
            <template #to>2021</template>
          </WorkExperience>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
