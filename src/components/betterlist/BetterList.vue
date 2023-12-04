<script setup lang="ts">
import { ref } from 'vue';
import { UUID } from 'crypto';

interface Item {
  id: UUID;
  name: string;
  category: UUID;
  isAssumedCategory: boolean;
}
interface ItemList {
  [id: UUID]: Item;
}
interface TermList {
  [name: string]: UUID;
}

interface Category {
  id: UUID;
  name: string;
}
// TODO: Be able to fill out category and attach to Items
interface CategoryList {
  [id: UUID]: Category;
}
const DEFAULT_CATEGORY: Category = {
  id: '0000-0000-0000-0000-0000',
  name: 'Unknown',
}

let term = ref('');
const termList = ref({} as TermList);
const itemList = ref({} as ItemList);
const readyList = ref([] as Item[]);
const completeList = ref([] as Item[]);

const addTerm = () => {
  console.log(term, term.value)
  // Check if Item term already exists
  let item: Item;
  if (termList.value[term.value]) {
    item = itemList.value[termList.value[term.value]];
  } else {
    item = {
      id: crypto.randomUUID() as UUID,
      name: term.value,
      // TODO: analyze term and try to match to category
      category: DEFAULT_CATEGORY.id,
      isAssumedCategory: true,
    };
    itemList.value[item.id] = item;
    termList.value[term.value] = item.id;
  }
  readyList.value.push(item);
  term.value = '';
  console.log(readyList.value, termList.value, itemList.value)
}

const addReady = (item: Item, index: number) => {
  readyList.value.push(item);
  completeList.value.splice(index, 1);
}

const addComplete = (item: Item, index: number) => {
  completeList.value.push(item);
  readyList.value.splice(index, 1);
}

</script>

<template>
<div className="flex min-h-screen flex-col">
  <div className="flex flex-col w-full">
    <h2 className="w-full">Betterlist</h2>
    <form className="flex justify-between" @submit.prevent="addTerm">
      <input type="text" list="terms" name="term" className="text-black" v-model="term" />
      <datalist id="terms">
        <option v-for="(id, term) in termList" :key="id" :value="term">{{ term }}</option>
      </datalist>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <div className="flex w-full h-auto">
    <div className="flex flex-col w-1/2 border-r pr-1">
      <h3 className="w-full">List</h3>
      <div className="w-full flex flex-col">
        <label v-for="(item, index) in readyList" :key="index">
          <input type="checkbox" :checked="false" :name="item.name" :id="item.id" @change.prevent="addComplete(item, index)" />
          {{ item.name }}
        </label>
      </div>
    </div>
    <div className="flex flex-col w-1/2 border-l pl-1">
      <h3 className="w-full">Complete</h3>
      <div className="w-full flex flex-col">
        <label v-for="(item, index) in completeList" :key="index">
          <input type="checkbox" :checked="false" :name="item.name" :id="item.id" @change.prevent="addReady(item, index)" />
          {{ item.name }}
        </label>
      </div>
    </div>
  </div>
</div>
</template>