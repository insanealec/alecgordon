<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import mapboxgl from 'mapbox-gl';

const isDark = useDark();
const isLocked = ref(false);
const toggleLock = useToggle(isLocked);

const accessToken = ref('');
const map = ref();
const mapBox = ref();

const submit = () => {
  if (!accessToken.value) return;
  isLocked.value ? destroy() : init();
  toggleLock();
}

const destroy = () => {
  map.value.remove();
  map.value = null;
}

const init = () => {
  mapboxgl.accessToken = accessToken.value;
  map.value = new mapboxgl.Map({
    container: mapBox.value,
    // Is there a way to toggle only the style when darkmode changes without reinstantiating the map?
    style: `mapbox://styles/mapbox/navigation-${ isDark.value ? 'night' : 'day' }-v1`,
    // long,lat
    center: [-71.224518, 42.213995],
    zoom: 9,
  });
}
</script>

<template>
<form class="flex flex-row mb-1" @submit.prevent="submit">
  <div class="flex flex-col w-full">
    <label for="token" class="text-sm font-medium text-gray-900 dark:text-white">MapBox API Token</label>
    <input type="text" id="token" name="token" placeholder="Token" v-model.trim="accessToken" :disabled="isLocked" />
  </div>
  <button type="submit" class="whitespace-nowrap py-2 px-3 bg-cyan-500 text-white font-semibold">{{ isLocked ? 'Clear' : 'Initialize' }} Map</button>
</form>
<div ref="mapBox" class="map-box flex flex-col min-h-screen max-w-screen"></div>
</template>