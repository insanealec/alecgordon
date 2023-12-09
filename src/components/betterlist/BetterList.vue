<script setup lang="ts">
import { ref } from 'vue';
import { useListStore, DEFAULT_CATEGORY } from '@/stores/list';
import ListItem from './ListItem.vue';

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
    <form class="form-grid" @submit.prevent="addTerm">
      <label for="term" class="form-label1 text-sm font-medium text-gray-900 dark:text-white">Add item to list</label>
      <input type="text" list="terms" id="term" name="term" placeholder="Item" v-model.trim="term" class="form-input1" />
      <datalist id="terms">
        <option v-for="(id, term) in store.termList" :key="id" :value="term">{{ term }}</option>
      </datalist>
      <label for="selectedCategory" class="form-label2 text-sm font-medium text-gray-900 dark:text-white">Add to category</label>
      <select id="selectedCategory" v-model="selectedCategory" class="form-input2 text-black p-2">
        <option v-for="(category, id) in store.categoryList" :value="id" :key="id">{{ category.name }}</option>
      </select>
      <button type="submit" class="form-button py-2 px-3 bg-cyan-500 text-white text-xt-sm font-semibold">Add</button>
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

<style lang="scss" scoped>
$split: "(max-width: 1024px)";
.form-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media #{$split} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr 2fr;
  }
}

.form-label1 { 
  grid-area: 1 / 1 / 2 / 3; 

  @media #{$split} {
    grid-area: 1 / 1 / 2 / 2;
  }
}
.form-label2 { 
  grid-area: 1 / 3 / 2 / 5; 

  @media #{$split} {
    grid-area: 3 / 1 / 4 / 2;
  }
}
.form-input1 { 
  grid-area: 2 / 1 / 3 / 3; 

  @media #{$split} {
    grid-area: 2 / 1 / 3 / 2;
  }
}
.form-input2 { 
  grid-area: 2 / 3 / 3 / 5; 

  @media #{$split} {
    grid-area: 4 / 1 / 5 / 2;
  }
}
.form-button { 
  grid-area: 2 / 5 / 3 / 6;

  @media #{$split} {
    grid-area: 1 / 2 / 5 / 3;
  }
}
</style>
