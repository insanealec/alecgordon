import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Coordinates, toCoords } from './map';
import { filter } from 'lodash';

interface Suggestion {
  id: string,
  address: string;
}
interface SuggestionList {
  [id: string]: Suggestion;
}

const SEARCH_API = 'https://api.mapbox.com/search/searchbox/v1/';
const SESSION_TOKEN = crypto.randomUUID();

export const useSearchStore = defineStore('search', () => {
  const accessToken = ref('');
  const term = ref('');
  const query = computed(() => encodeURIComponent(term.value));
  const tokenStr = computed(() => `session_token=${SESSION_TOKEN}&access_token=${accessToken.value}`);
  const suggestions = ref({} as SuggestionList);

  const suggest = async (proximity?: Coordinates) => {
    let url = `${SEARCH_API}suggest?q=${query.value}&${tokenStr.value}`;
    if (proximity) {
      url = `${url}&proximity=${proximity.lng},${proximity.lat}`;
    }
    try {
      const request = await fetch(url);
      // TODO: Place response.attribution somewhere for legal
      const response = await request.json();
      // Remove Brand type and anything without a full_address
      const filteredSuggestions = filter(response.suggestions, (s) => s.feature_type !== 'brand' && s.full_address);
      suggestions.value = filteredSuggestions.reduce((acc, s): SuggestionList => {
        return { ...acc, [s.mapbox_id]: { id: s.mapbox_id, address: s.full_address, } };
      }, {});
    } catch (e) {
      console.log('suggest', e)
    }
  }

  const retrieve = async (id: string): Promise<Coordinates|undefined> => {
    const url = `${SEARCH_API}retrieve/${id}?${tokenStr.value}`;
    try {
      const request = await fetch(url);
      const response = await request.json();
      return toCoords(response.features[0].geometry.coordinates);
    } catch (e) {
      console.log('retrieve', e);
    }
  }

  return {
    accessToken,
    term,
    query,
    tokenStr,
    suggestions,
    suggest,
    retrieve,
  }
});