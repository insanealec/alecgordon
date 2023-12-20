import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Location {
  // Searched address
  query: string;
  // [longitude, latitude]
  coordinates: number[];
}

export const useMapStore = defineStore('map', () => {
  const locations = ref([] as Location[]);
});