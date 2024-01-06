<script setup lang="ts">
import { ref } from 'vue';
import { useFoodStore, CUISINES } from '@/stores/food';

const currentTab = ref(0);

const food = useFoodStore();

const addPerson = () => {
  currentTab.value = food.addPerson();
}

</script>

<template>
<div role="tablist" class="tabs tabs-lifted">

  <template v-for="(person, index) in food.people" :key="person">
    <input v-model="currentTab" :value="index" type="radio" name="peopleTabs" role="tab" class="tab h-16 sm:h-8" :aria-label="person.name" />
    <div role="tabpanel" class="tab-content bg-neutral border-base-300 rounded-box p-6">
      <div class="w-full mb-1">
        <div v-for="cuisine in CUISINES" :key="cuisine" class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{{ cuisine }}</span>
            <input type="checkbox" class="checkbox" />
          </label>
        </div>
      </div>
    </div>
  </template>

  <button @click="addPerson" name="peopleTabs" role="tab" class="tab h-16 sm:h-8" aria-label="Add Person">Add Person</button>

</div>

</template>

<style lang="scss">
.tab {
  --tab-bg: oklch(var(--n));
}
</style>