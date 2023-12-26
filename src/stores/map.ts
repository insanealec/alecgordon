import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useDark } from '@vueuse/core';
import mapboxgl, { Map, Marker } from 'mapbox-gl';

interface Coordinates {
  lng: number;
  lat: number;
}
interface Place {
  // Searched address
  name: string;
  coords: Coordinates;
  // Marker on map
  marker?: Marker,
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
  // Places added to the map and kept after search for use in delivery
  // TODO: array or map?
  // const places = ref([] as Place[]);
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
    map.value = new Map({
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

  const setPlace = (address: string, coords: Coordinates) => {
    // Clear old marker
    if (currentPlace.value.marker) {
      currentPlace.value.marker.remove();
    }
    const marker = new Marker({
      color: 'red',
    }).setLngLat(coords).addTo(map.value);
    currentPlace.value = {
      name: address,
      coords,
      marker,
    };
  }

  return {
    currentPlace,
    accessToken,
    map,
    mapBox,
    init,
    destroy,
    setPlace,
  };
});

