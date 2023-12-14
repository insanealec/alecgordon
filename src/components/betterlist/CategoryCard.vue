<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { useToggle, useFocus } from '@vueuse/core';
import { useListStore, type Category, DEFAULT_CATEGORY } from '@/stores/list';

const props = defineProps<{
  category: Category;
}>();

const isDefault = props.category.id === DEFAULT_CATEGORY.id;

const store = useListStore();
const [isEditState, toggleEdit] = useToggle(false);
const editEl = ref();
const { focused } = useFocus(editEl, { initialValue: false });
const toggleFocus = useToggle(focused);
const name = ref(props.category.name);

const toggle = async () => {
  toggleEdit();
  await nextTick();
  toggleFocus();
};

const save = () => {
  const cat = {
    ...props.category,
    name: name.value,
  };
  store.updateCategory(cat);
  toggle();
};
</script>

<template>
<div v-if="!isDefault" class="card bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">
      <button v-if="!isEditState" @click="toggle" class="btn btn-ghost">{{ category.name }}</button>
      <input v-else ref="editEl" v-model="name" type="text">
    </h2>
    <div class="card-actions justify-end">
      <template v-if="isEditState">
        <button @click="save" class="btn btn-primary">Save</button>
        <button @click="toggle" class="btn">Cancel</button>
      </template>
      <button v-else @click="store.deleteCategory(category.id.toString())" class="btn">Delete</button>
    </div>
  </div>
</div>
</template>