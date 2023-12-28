import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import { isEmpty } from 'lodash';

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
  // MapBox ID
  id: string;
}
interface Places {
  [id: string]: Place;
}
// This is an array, 0 index is always long, 1 index is always lat
type MapboxCoords = { '0': number, '1': number};

export type {
  Coordinates,
  Place,
  Places,
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

  const map = ref();
  const mapBox = ref();

  const currentPlace = ref({} as Place);
  const hasCurrentPlace = computed(() => !isEmpty(currentPlace.value));
  // Places added to the map and kept after search for use in delivery routing
  const places = ref({} as Places);
  const hasPlaces = computed(() => !isEmpty(places.value));

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

  const setPlace = (id: string, address: string, coords: Coordinates) => {
    clearPlace();
    const marker = new Marker({
      color: 'red',
    }).setLngLat(coords).addTo(map.value);
    currentPlace.value = {
      id,
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

  const addPlace = () => {
    places.value[currentPlace.value.id] = {
      ...currentPlace.value,
      marker: new Marker().setLngLat(currentPlace.value.coords).addTo(map.value),
    };
    clearPlace();
    console.log(places.value);
  }

  return {
    accessToken,
    map,
    mapBox,
    currentPlace,
    hasCurrentPlace,
    places,
    hasPlaces,
    init,
    destroy,
    clearPlace,
    setPlace,
    addPlace,
  };
});

