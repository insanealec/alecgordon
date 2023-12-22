<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

interface Coordinates {
  lng: number;
  lat: number;
}
const toCoords = (mapCoord: { '0': number, '1': number}): Coordinates => {
  return { lng: mapCoord['0'], lat: mapCoord['1'] };
}

interface Place {
  name: string;
  coords: Coordinates;
}

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
const geocoder = ref();

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
    // lng,lat
    center: [-71.224518, 42.213995],
    zoom: 9,
  });
  addGeocoder();
}

const addGeocoder = () => {
  geocoder.value = new MapboxGeocoder({
    accessToken: accessToken.value,
    mapboxgl: mapboxgl,
  });
  geocoder.value.on('result', (e: any) => {
    const { center, place_name } = e.result;
    const currentPlace: Place = {
      name: place_name,
      coords: toCoords(center),
    };
    console.log(currentPlace);
  });
  map.value.addControl(geocoder.value);
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