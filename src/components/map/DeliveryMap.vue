<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import mapboxgl from 'mapbox-gl';

const isLocked = ref(false);
const toggleLock = useToggle(isLocked);
const lockStyle = computed(() => isLocked.value ? 'pointer-events-none select-none blur-sm' : '');

const isDark = useDark();
const mapStyle = computed(() => `mapbox://styles/mapbox/navigation-${ isDark.value ? 'night' : 'day' }-v1`);
// Change the map style when darkmode is toggled
watch(isDark, () => {
  if (map.value) {
    // `diff: true` tries to only change the style and keep everything, but it prints warnings every time
    map.value.setStyle(mapStyle.value, { diff: false });
    // TODO: re-add markers/elements to map (https://docs.mapbox.com/mapbox-gl-js/example/style-switch/)
  }
});

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
    style: mapStyle.value,
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
    <input type="text" id="token" name="token" placeholder="Token" :class="lockStyle" v-model.trim="accessToken" :disabled="isLocked" />
  </div>
  <button type="submit" class="whitespace-nowrap py-2 px-3 bg-cyan-500 text-white font-semibold">{{ isLocked ? 'Clear' : 'Initialize' }} Map</button>
</form>
<div ref="mapBox" class="map-box flex flex-col min-h-screen max-w-screen">
  <div v-if="!isLocked" class="skeleton flex-grow"></div>
</div>
</template>