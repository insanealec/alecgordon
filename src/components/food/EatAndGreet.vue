<script setup lang="ts">
import { ref } from 'vue';

// TODO: don't just take these from a delivery app like I did
const CUISINES = [
  'Breakfast',
  'Burgers',
  'Pizza',
  'Sushi',
  'Mexican',
  'Italian',
  'Chinese',
];

const currentTab = ref(0);

const people = ref(['Person 1'] as string[]);

const addPerson = () => {
  const len = people.value.length;
  //TODO: toast; arbitrary max
  if (len > 8) {
    currentTab.value = len-1;
    return;
  }
  people.value.push(`Person ${len+1}`);
  currentTab.value = len;
}

</script>

<template>
<div role="tablist" class="tabs tabs-lifted">

  <template v-for="(person, index) in people" :key="person">
    <input v-model="currentTab" :value="index" type="radio" name="peopleTabs" role="tab" class="tab h-16 sm:h-8" :aria-label="person" />
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