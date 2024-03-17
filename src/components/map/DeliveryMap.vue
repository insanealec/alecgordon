<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapStore, type Coordinates } from '@/stores/map';
import { useSearchStore } from '@/stores/search';
import 'mapbox-gl/dist/mapbox-gl.css'
import TokenModal from '../shared/TokenModal.vue';

const currentTab = ref(0);

const search = useSearchStore();
const mapStore = useMapStore();
const { hasToken } = storeToRefs(mapStore);
const mapBox = ref();

watch(hasToken, () => {
  setupMap();
})

onMounted(() => {
  setupMap();
})

/**
 * Token entry is handled by a modal, so we:
 *  - Watch for if the token is added or removed
 *  - Check on component mount in case the token is in localstorage
 * Which lets us either destroy the map if the token is gone, or create it when a token is detected.
 * Token is also shared to the search pinia store.
 */
const setupMap = () => {
  if (hasToken.value) {
    mapStore.init(mapBox);
  } else {
    mapStore.destroy();
  }
  search.accessToken = mapStore.accessToken;
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
    <TokenModal />
  </div>

  <input v-model="currentTab" value="1" :disabled="!hasToken" type="radio" name="mapTabs" role="tab" class="tab h-16 sm:h-8" aria-label="Address Search" />
  <div role="tabpanel" class="tab-content bg-neutral border-base-300 rounded-box p-6">
    <form class="join w-full mb-1" @submit.prevent="suggest">
      <input v-model.trim="search.term" class="join-item" type="text" id="address" name="address" placeholder="Address" />
      <button type="submit" class="btn join-item whitespace-nowrap py-2 px-3 bg-secondary text-white font-semibold">Search</button>
    </form>
    <button v-if="mapStore.hasCurrentPlace" @click="addPlace" class="btn btn-success w-full mb-1">Add</button>
    <div v-if="search.hasSuggestions" class="suggestions join join-vertical flex border border-secondary">
      <div v-for="(suggestion, id) in search.suggestions" :key="id" class="flex flex-row items-center join-item w-full hover:bg-info-content">
        <span class="indent mr-auto">{{ suggestion.address }}</span>
        <button class="btn btn-info" @click="retrieve(id.toString())">Show</button>
      </div>
    </div>
  </div>

  <input v-model="currentTab" value="2" :disabled="!hasToken || !mapStore.hasPlaces" type="radio" name="mapTabs" role="tab" class="tab h-16 sm:h-8" aria-label="Delivery Optimization" />
  <div role="tabpanel" class="tab-content bg-neutral border-base-300 rounded-box p-6">
    <div class="w-full">
      <p v-for="(place, id) in mapStore.places" :key="id">{{ place.name }}</p>
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