<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Item {
  id: string;
  name: string;
  categoryID: string;
  isAssumedCategory: boolean;
}
// "DB" for all items
interface ItemList {
  [id: string]: Item;
}
// "DB" for terms
interface TermList {
  [name: string]: string;
}
// Type for active list of items
interface ListGroup {
  [id: string]: string;
}

interface Category {
  id: string;
  name: string;
}
// TODO: Be able to fill out category and attach to Items
interface CategoryList {
  [id: string]: Category;
}
const DEFAULT_CATEGORY: Category = {
  id: '0000-0000-0000-0000-0000',
  name: 'No Category',
}

let term = ref('');
let selectedCategory = ref(DEFAULT_CATEGORY.id);
const termList = ref({} as TermList);
const itemList = ref({} as ItemList);
const readyList = ref({} as ListGroup);
const completeList = ref({} as ListGroup);
const categoryList = ref({} as CategoryList);

onMounted(() => {
  // TODO: load categories from storage
  if (localStorage.getItem('categories')) {
    //
  } else {
    categoryList.value[DEFAULT_CATEGORY.id] = DEFAULT_CATEGORY;
  }
});

const addTerm = () => {
  // No empty list terms
  if (!term.value) return;
  // Check if Item term already exists
  let item: Item;
  if (termList.value[term.value]) {
    item = itemList.value[termList.value[term.value]];
  } else {
    item = {
      id: crypto.randomUUID(),
      name: term.value,
      categoryID: selectedCategory.value,
      isAssumedCategory: true,
    };
    itemList.value[item.id] = item;
    termList.value[term.value] = item.id;
  }
  // Lists can have multiples of the item
  readyList.value[crypto.randomUUID()] = item.id;
  term.value = '';
  console.log(readyList.value, termList.value, itemList.value)
}

const addReady = (key: string) => {
  readyList.value[key] = completeList.value[key];
  delete completeList.value[key];
}

const addComplete = (key: string) => {
  completeList.value[key] = readyList.value[key];
  delete readyList.value[key];
}

</script>

<template>
<div class="flex min-h-screen flex-col">
  <div class="flex flex-col w-full">
    <h2 class="w-full">Betterlist</h2>
    <form class="flex" @submit.prevent="addTerm">
      <input type="text" list="terms" name="term" class="text-black p-2" v-model.trim="term" />
      <datalist id="terms">
        <option v-for="(id, term) in termList" :key="id" :value="term">{{ term }}</option>
      </datalist>
      <select v-model="selectedCategory" class="text-black p-2">
        <option v-for="(category, id) in categoryList" :value="id" :key="id">{{ category.name }}</option>
      </select>
      <button type="submit" class="py-2 px-3 bg-cyan-500 text-white text-xt-sm font-semibold">Add</button>
    </form>
  </div>
  <div class="flex w-full h-auto">
    <div class="flex flex-col w-1/2 border-r pr-1">
      <h3 class="w-full">List</h3>
      <div class="w-full flex flex-col">
        <label class="flex flex-row items-center" v-for="(itemID, key) in readyList" :key="key">
          <input class="item" type="checkbox" :checked="false" :name="itemList[itemID].name" :id="itemID" @change.prevent="addComplete(key.toString())" />
          {{ itemList[itemID].name }}
        </label>
      </div>
    </div>
    <div class="flex flex-col w-1/2 border-l pl-1">
      <h3 class="w-full">Complete</h3>
      <div class="w-full flex flex-col">
        <label class="flex flex-row items-center" v-for="(itemID, key) in completeList" :key="key">
          <input class="item" type="checkbox" :checked="true" :name="itemList[itemID].name" :id="itemID" @change.prevent="addReady(key.toString())" />
          {{ itemList[itemID].name }}
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