<script setup lang="ts">
import { watch, computed } from 'vue';
import { useStorage } from '@vueuse/core';

const DEFAULT_THEME = 'night';
const AVAILABLE_THEMES = [
  'dark',
  'synthwave',
  'business',
  'night',
  'dracula',
];

const theme = useStorage('theme', DEFAULT_THEME);
watch(theme, () => {
  setTheme();
});

const setTheme = () => {
  const html = document.querySelector('html');
  html?.setAttribute('data-theme', theme.value);
}

const domTheme = computed(() => {
  const html = document.querySelector('html');
  return html?.getAttribute('data-theme');
})

// Change the theme on startup if we have a different one saved.
if (theme.value !== domTheme.value) {
  setTheme();
}
</script>

<template>

<select v-model="theme" class="w-fit">
  <option v-for="th in AVAILABLE_THEMES" :key="th" :value="th" :data-theme="th">{{ th }}</option>
</select>

</template>
