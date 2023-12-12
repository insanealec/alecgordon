<script setup lang="ts">
import { ref } from 'vue';
import { useListStore } from '@/stores/list';
import CategoryCard from './CategoryCard.vue';

const store = useListStore();
const categoryName = ref('');

const addCategory = () => {
  store.addCategory(categoryName.value);
  categoryName.value = '';
};
</script>

<template>
<div class="flex flex-col w-full">
  <form class="form-grid" @submit.prevent="addCategory">
    <label for="categoryName" class="form-label1 text-sm font-medium text-gray-900 dark:text-white">Add category</label>
    <input type="text" id="categoryName" name="categoryName" placeholder="Category" v-model.trim="categoryName" class="form-input1" />
    <button type="submit" class="form-button py-2 px-3 bg-cyan-500 text-white font-semibold">Add</button>
  </form>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  <CategoryCard v-for="(category, id) in store.categoryList" :key="id" :category="category" />
</div>
</template>

<style lang="scss" scoped>
</style>
