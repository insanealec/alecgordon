import { defineStore } from 'pinia';
import { ref } from 'vue';
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
// This is an array, 0 index is always long, 1 index is always lat
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
  return [coords.lng, coords.lat];
}

export {
  toCoords,
  fromCoords,
}

const MAP_STYLE = 'mapbox://styles/mapbox/navigation-night-v1';
const DEFAULT_ZOOM = 11;

export const useMapStore = defineStore('map', () => {
  const accessToken = ref('');
  const currentPlace = ref({} as Place);
  // Places added to the map and kept after search for use in delivery
  // TODO: array or map?
  // const places = ref([] as Place[]);
  const map = ref();
  const mapBox = ref();

  const init = (mb: any) => {
    // Copy mapbox template ref from component
    mapBox.value = mb.value;
    mapboxgl.accessToken = accessToken.value;
    map.value = new Map({
      container: mapBox.value,
      style: MAP_STYLE,
      // lng,lat
      center: [-83.653824, 41.562829],
      zoom: DEFAULT_ZOOM,
    });
  }

  const destroy = () => {
    clearPlace();
    map.value.remove();
    map.value = null;
  }

  const clearPlace = () => {
    // Clear old marker
    if (currentPlace.value.marker) {
      currentPlace.value.marker.remove();
    }
    currentPlace.value = {} as Place;
  }

  const setPlace = (address: string, coords: Coordinates) => {
    clearPlace();
    const marker = new Marker({
      color: 'red',
    }).setLngLat(coords).addTo(map.value);
    currentPlace.value = {
      name: address,
      coords,
      marker,
    };
    map.value.flyTo({
      center: fromCoords(coords),
      zoom: DEFAULT_ZOOM,
      duration: 3000, // 3 seconds
      essential: true,
    });
  }

  return {
    currentPlace,
    accessToken,
    map,
    mapBox,
    init,
    destroy,
    clearPlace,
    setPlace,
  };
});

