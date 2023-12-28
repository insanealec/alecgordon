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

const currentTab = ref(0);

const search = useSearchStore();
const mapStore = useMapStore();
const mapBox = ref();

const submit = () => {
  if (!mapStore.accessToken) return;
  if (isLocked.value) {
    mapStore.destroy();
    currentTab.value = 0;
  } else {
    mapStore.init(mapBox);
    currentTab.value = 1;
  }
  search.accessToken = mapStore.accessToken;
  toggleLock();
}

const suggest = () => {
  try {
    const biasCoords: Coordinates = mapStore.map?.transform?.center ?? undefined;
    search.suggest(biasCoords);
  } catch (e) {
    console.log('Could not find suggestions based on search term.');
  }
}

const retrieve = async (id: string) => {
  try {
    let coords = await search.retrieve(id);
    // Add Marker to map and add to list of Places in mapStore
    mapStore.setPlace(id, search.suggestions[id].address, coords);
    search.term = mapStore.currentPlace.name;
  } catch (e) {
    console.log('Could not retrieve coordinates for selected address.');
  }
}

const addPlace = () => {
  mapStore.addPlace();
}

</script>

<template>
<div role="tablist" class="tabs tabs-lifted">

  <input v-model="currentTab" value="0" type="radio" name="mapTabs" role="tab" class="tab h-16 sm:h-8" aria-label="Mapbox Token Entry" />
  <div role="tabpanel" class="tab-content bg-neutral border-base-300 rounded-box p-6">
    <form class="join w-full mb-1" @submit.prevent="submit">
      <input v-model.trim="mapStore.accessToken" :disabled="isLocked" :class="lockStyle" class="join-item" type="text" id="token" name="token" placeholder="Mapbox API Token" />
      <button type="submit" class="btn join-item whitespace-nowrap py-2 px-3 bg-cyan-500 text-white font-semibold">{{ isLocked ? 'Clear' : 'Initialize' }} Map</button>
    </form>
  </div>

  <input v-model="currentTab" value="1" :disabled="!isLocked" type="radio" name="mapTabs" role="tab" class="tab h-16 sm:h-8" aria-label="Address Search" />
  <div role="tabpanel" class="tab-content bg-neutral border-base-300 rounded-box p-6">
    <form class="join w-full mb-1" @submit.prevent="suggest">
      <input v-model.trim="search.term" class="join-item" type="text" id="address" name="address" placeholder="Address" />
      <button type="submit" class="btn join-item whitespace-nowrap py-2 px-3 bg-secondary text-white font-semibold">Search</button>
    </form>
    <div v-if="search.hasSuggestions" class="suggestions join join-vertical flex border border-secondary">
      <div v-for="(suggestion, id) in search.suggestions" :key="id" class="flex flex-row items-center join-item w-full hover:bg-info-content">
        <span class="indent mr-auto">{{ suggestion.address }}</span>
        <button class="btn btn-info" @click="retrieve(id.toString())">Show</button>
      </div>
      <button v-if="mapStore.hasCurrentPlace" @click="addPlace" class="btn btn-success w-full">Add</button>
    </div>
  </div>

</div>

<div ref="mapBox" class="map-box flex flex-col min-h-screen max-w-screen"></div>
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

.tab {
  --tab-bg: oklch(var(--n));
}
</style>