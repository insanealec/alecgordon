<script setup lang="ts">
import { useListStore } from '@/stores/list';
import CategoryCard from './CategoryCard.vue';

const store = useListStore();
</script>

<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  <CategoryCard v-for="(category, id) in store.categoryList" :key="id" :category="category" />
</div>
</template>

<style lang="scss" scoped>
</style>
