<script setup lang="ts">
import { useListStore, type ListGroup } from '@/stores/list';

defineProps<{
  list: ListGroup;
  addFunc: Function;
  checked: boolean;
}>();

const store = useListStore();

</script>

<template>
<label class="flex flex-row items-center" v-for="(itemID, key) in list" :key="key">
  <input class="item" type="checkbox" :checked="checked" :name="store.itemList[itemID].name" :id="itemID" @change.prevent="addFunc(key.toString())" />
  {{ store.itemList[itemID].name }}
</label>
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
