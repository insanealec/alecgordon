<script setup lang="ts">
import { ref, computed } from 'vue';
import { useToggle } from '@vueuse/core';
import { useMapStore } from '@/stores/map';
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const isLocked = ref(false);
const toggleLock = useToggle(isLocked);
const lockStyle = computed(() => isLocked.value ? 'pointer-events-none select-none blur-sm' : '');

const store = useMapStore();
const mapBox = ref();

const submit = () => {
  if (!store.accessToken) return;
  isLocked.value ? store.destroy() : store.init(mapBox);
  toggleLock();
}

</script>

<template>
<form class="flex flex-row mb-1" @submit.prevent="submit">
  <div class="flex flex-col w-full">
    <label for="token" class="text-sm font-medium text-gray-900 dark:text-white">MapBox API Token</label>
    <input type="text" id="token" name="token" placeholder="Token" :class="lockStyle" v-model.trim="store.accessToken" :disabled="isLocked" />
  </div>
  <button type="submit" class="whitespace-nowrap py-2 px-3 bg-cyan-500 text-white font-semibold">{{ isLocked ? 'Clear' : 'Initialize' }} Map</button>
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

.mapboxgl-ctrl-geocoder {
  &--input {
    &:focus {
      @apply text-gray-900 dark:text-white;
    }
  }
}
</style>