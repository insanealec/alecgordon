<script setup lang="ts">
import { useListStore } from '@/stores/list';

const store = useListStore();

</script>

<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  <div v-for="(category, id) in store.categoryList" :key="id" class="card bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ category.name }}</h2>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-ghost">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
</style>
