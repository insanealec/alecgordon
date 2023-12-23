import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Coordinates } from './map';
import { filter } from 'lodash';

interface Suggestion {
  id: string,
  address: string;
}

const SEARCH_API = 'https://api.mapbox.com/search/searchbox/v1/';
const SESSION_TOKEN = crypto.randomUUID();

export const useSearchStore = defineStore('search', () => {
  const accessToken = ref('');
  const term = ref('');
  const query = computed(() => encodeURIComponent(term.value));
  const suggestions = ref([] as Suggestion[]);

  const suggest = async (proximity?: Coordinates) => {
    let url = `${SEARCH_API}suggest?q=${query.value}&session_token=${SESSION_TOKEN}&access_token=${accessToken.value}`;
    if (proximity) {
      url = `${url}&proximity=${proximity.lng},${proximity.lat}`;
    }
    try {
      const request = await fetch(url);
      // TODO: Place response.attribution somewhere for legal
      const response = await request.json();
      suggestions.value = filter(
          response.suggestions,
          // Remove Brand type and anything without a full_address
          (s) => s.feature_type !== 'brand' && s.full_address
        ).map(
          (s): Suggestion => {
            return {
              address: s.full_address,
              id: s.mapbox_id
            };
          }
        );
      console.log(suggestions.value);
    } catch (e) {
      console.log(url)
    }
  }

  const retrieve = () => {
    //
  }

  return {
    accessToken,
    term,
    query,
    suggestions,
    suggest,
    retrieve,
  }
});