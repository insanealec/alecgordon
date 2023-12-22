import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useDark } from '@vueuse/core';
import mapboxgl from 'mapbox-gl';

interface Coordinates {
  lng: number;
  lat: number;
}
interface Place {
  // Searched address
  name: string;
  coords: Coordinates;
}
type MapboxCoords = { '0': number, '1': number};

export type {
  Coordinates,
  Place,
  MapboxCoords,
}

// Convert from mapbox lng,lat arr/obj to one I want to work with
const toCoords = (mapCoord: MapboxCoords): Coordinates => {
  return { lng: mapCoord['0'], lat: mapCoord['1'] };
}
const fromCoords = (coords: Coordinates): MapboxCoords => {
  return { '0': coords.lng, '1': coords.lat };
}

export {
  toCoords,
  fromCoords,
}

export const useMapStore = defineStore('map', () => {
  const accessToken = ref('');
  const currentPlace = ref({} as Place);
  const map = ref();
  const mapBox = ref();

  const isDark = useDark();
  const mapStyle = computed(() => `mapbox://styles/mapbox/navigation-${ isDark.value ? 'night' : 'day' }-v1`);
  // Change the map style when darkmode is toggled
  watch(isDark, () => {
    if (map.value) {
      // `diff: true` tries to only change the style and keep everything, but it prints warnings every time
      map.value.setStyle(mapStyle.value, { diff: false });
      // TODO: check if we need to re-add markers/elements to map (https://docs.mapbox.com/mapbox-gl-js/example/style-switch/)
    }
  });

  const init = (mb: any) => {
    // Copy mapbox template ref from component
    mapBox.value = mb.value;
    mapboxgl.accessToken = accessToken.value;
    map.value = new mapboxgl.Map({
      container: mapBox.value,
      style: mapStyle.value,
      // lng,lat
      center: [-83.653824, 41.562829],
      zoom: 9,
    });
  }

  const destroy = () => {
    map.value.remove();
    map.value = null;
  }

  return {
    currentPlace,
    accessToken,
    map,
    mapBox,
    init,
    destroy,
  };
});

