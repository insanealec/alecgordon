<script setup lang="ts">
import { useListStore, type CategoryItems } from '@/stores/list';

defineProps<{
  categories: CategoryItems;
  addFunc: Function;
  checked: boolean;
}>();

const store = useListStore();

</script>

<template>
<div v-for="(group, catID) in categories" :key="catID">
  <template v-if="Object.keys(group).length > 0">
    {{ store.categoryList[catID].name }}
    <label class="flex flex-row items-center" v-for="(itemID, key) in group" :key="key">
      <input class="item" type="checkbox" :checked="checked" :name="store.itemList[itemID].name" :id="itemID" @change.prevent="addFunc(catID, key.toString())" />
      {{ store.itemList[itemID].name }}
    </label>
  </template>
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
