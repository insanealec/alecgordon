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
  <form class="grid grid-flow-col grid-column-4 lg:grid-column-5 grid-rows-[1fr_2fr_2fr] md:grid-rows-[1fr_2fr] mb-2" @submit.prevent="addCategory">
    <label class="col-span-4 md:col-span-3 text-sm font-medium" for="categoryName">Add category</label>
    <input class="col-span-4 md:col-span-3" type="text" id="categoryName" name="categoryName" placeholder="Category" v-model.trim="categoryName" />
    <button class="col-span-4 md:col-span-1 md:row-span-2 py-2 px-3 bg-primary text-white font-semibold" type="submit">Add</button>
  </form>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  <CategoryCard v-for="(category, id) in store.categoryList" :key="id" :category="category" />
</div>
</template>

<style lang="scss" scoped>
</style>
