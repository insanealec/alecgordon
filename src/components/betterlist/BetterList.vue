<script setup lang="ts">
import { ref } from 'vue';
import { useListStore, DEFAULT_CATEGORY } from '@/stores/list';

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
    <h2 class="w-full">Betterlist</h2>
    <form class="flex" @submit.prevent="addTerm">
      <input type="text" list="terms" name="term" class="text-black p-2" v-model.trim="term" />
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
        <label class="flex flex-row items-center" v-for="(itemID, key) in store.readyList" :key="key">
          <input class="item" type="checkbox" :checked="false" :name="store.itemList[itemID].name" :id="itemID" @change.prevent="store.addComplete(key.toString())" />
          {{ store.itemList[itemID].name }}
        </label>
      </div>
    </div>
    <div class="flex flex-col w-1/2 border-l pl-1">
      <h3 class="w-full">Complete</h3>
      <div class="w-full flex flex-col">
        <label class="flex flex-row items-center" v-for="(itemID, key) in store.completeList" :key="key">
          <input class="item" type="checkbox" :checked="true" :name="store.itemList[itemID].name" :id="itemID" @change.prevent="store.addReady(key.toString())" />
          {{ store.itemList[itemID].name }}
        </label>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.item {
  width: 1rem;
  height: 1rem;
  margin: 0.25rem;
  border-radius: 0.25rem;

  &:checked {
    @apply shadow-cyan-500;
    box-shadow: inset 0 0 0 1rem var(--tw-shadow-color);
  }
}
</style>