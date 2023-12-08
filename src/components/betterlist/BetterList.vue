<script setup lang="ts">
import { ref } from 'vue';
import { useListStore, DEFAULT_CATEGORY } from '@/stores/list';
import ListItem from './ListItem.vue';
// import CategoryModal from './CategoryModal.vue';
import { FwbInput } from 'flowbite-vue';

const store = useListStore();
let term = ref('');
let selectedCategory = ref(DEFAULT_CATEGORY.id);

const addTerm = () => {
  store.addTerm(term.value, selectedCategory.value);
  term.value = '';
}

</script>

<template>
<div class="flex min-h-screen flex-col">
  <div class="flex flex-col w-full">
    <!-- <CategoryModal /> -->
    <h2 class="w-full">Betterlist</h2>
    <form class="flex" @submit.prevent="addTerm">
      <fwb-input
        v-model.trim="term"
        label="Add to list"
        list="terms"
      />
      <datalist id="terms">
        <option v-for="(id, term) in store.termList" :key="id" :value="term">{{ term }}</option>
      </datalist>
      <select v-model="selectedCategory" class="text-black p-2">
        <option v-for="(category, id) in store.categoryList" :value="id" :key="id">{{ category.name }}</option>
      </select>
      <button type="submit" class="py-2 px-3 bg-cyan-500 text-white text-xt-sm font-semibold">Add</button>
    </form>
  </div>
  <div class="flex w-full h-auto">
    <div class="flex flex-col w-1/2 border-r pr-1">
      <h3 class="w-full">List</h3>
      <div class="w-full flex flex-col">
        <ListItem :list="store.readyList" :add-func="store.addComplete" :checked="false" />
      </div>
    </div>
    <div class="flex flex-col w-1/2 border-l pl-1">
      <h3 class="w-full">Complete</h3>
      <div class="w-full flex flex-col">
        <ListItem :list="store.completeList" :add-func="store.addReady" :checked="true" />
      </div>
    </div>
  </div>
</div>
</template>
