import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useDark } from '@vueuse/core';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

interface Coordinates {
  lng: number;
  lat: number;
}
interface Place {
  // Searched address
  name: string;
  coords: Coordinates;
}

// Convert from mapbox lng,lat arr/obj to one I want to work with
const toCoords = (mapCoord: { '0': number, '1': number}): Coordinates => {
  return { lng: mapCoord['0'], lat: mapCoord['1'] };
}

export const useMapStore = defineStore('map', () => {
  const currentPlace = ref({} as Place);
  const accessToken = ref('');
  const map = ref();
  const mapBox = ref();
  const geocoder = ref();

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
    addGeocoder();
  }

  const destroy = () => {
    map.value.remove();
    map.value = null;
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
      // TODO: Add a prompt for if this address should be added to the list
      // Then place a permanent marker, clear the geocoder marker, and prepare address list
      console.log(currentPlace);
    });
    map.value.addControl(geocoder.value);
  }

  return {
    currentPlace,
    accessToken,
    map,
    mapBox,
    geocoder,
    init,
    destroy,
    addGeocoder,
  };
});

