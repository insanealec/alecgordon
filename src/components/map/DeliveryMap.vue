<script setup lang="ts">
import { ref, computed } from 'vue';
import { useToggle } from '@vueuse/core';
import { useMapStore, type Coordinates } from '@/stores/map';
import { useSearchStore } from '@/stores/search';
import 'mapbox-gl/dist/mapbox-gl.css'

// User Mapbox Token mutex
const isLocked = ref(false);
const toggleLock = useToggle(isLocked);
const lockStyle = computed(() => isLocked.value ? 'pointer-events-none select-none blur-sm' : '');

const search = useSearchStore();
const map = useMapStore();
const mapBox = ref();

const submit = () => {
  if (!map.accessToken) return;
  isLocked.value ? map.destroy() : map.init(mapBox);
  search.accessToken = map.accessToken;
  toggleLock();
}

const suggest = () => {
  const biasCoords: Coordinates = map.map?.transform?.center ?? undefined;
  search.suggest(biasCoords);
}

</script>

<template>
<form class="flex flex-row mb-1" @submit.prevent="submit">
  <div class="flex flex-col w-full">
    <label for="token" class="text-sm font-medium text-gray-900 dark:text-white">MapBox API Token</label>
    <input type="text" id="token" name="token" placeholder="Token" :class="lockStyle" v-model.trim="map.accessToken" :disabled="isLocked" />
  </div>
  <button type="submit" class="whitespace-nowrap py-2 px-3 bg-cyan-500 text-white font-semibold">{{ isLocked ? 'Clear' : 'Initialize' }} Map</button>
</form>
<form class="flex flex-row mb-1" @submit.prevent="suggest">
  <input type="text" id="address" name="address" placeholder="Address" v-model.trim="search.term" />
</form>
<div ref="mapBox" class="map-box flex flex-col min-h-screen max-w-screen"></div>
<!-- <div v-if="!isLocked" class="skeleton flex-grow"></div> -->
</template>

<style lang="scss">
.mapboxgl-canvas {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>