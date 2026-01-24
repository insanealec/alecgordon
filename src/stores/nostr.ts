
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Event } from 'nostr-tools';
import {
  Metadata,
  ShortTextNote,
} from 'nostr-tools/kinds';
import * as nip19 from 'nostr-tools/nip19';

interface Author {
  pubkey: string;
  hexkey: string;
  name?: string;
  about?: string;
  picture?: string;
}
interface NostrAuthors {
  [pubkey: string]: Author;
}

const INITIAL_RELAYS = [
  "wss://relayable.org",
  "wss://relay.damus.io",
  "wss://purplepag.es",
  "wss://nos.lol",
];

export const useNostrStore = defineStore('nostr', () => {
  const relays = useLocalStorage('nostr-relays', INITIAL_RELAYS);
  const authors = useLocalStorage('nostr-authors', {} as NostrAuthors);
  const events = ref([] as Event[]);

  const users = computed(() => {
    const filtered = events.value.filter((event) => {
      return event.kind === Metadata;
    });
    const users: Map<string, any> = new Map();
    for(const event of filtered) {
      users.set(event.pubkey, event);
    }
    return users;
  });

  const notes = computed(() => {
    const filtered = events.value.filter((event) => {
      return event.kind === ShortTextNote;
    });
    const notes: Map<string, any> = new Map();
    for(const event of filtered) {
      notes.set(event.pubkey, event);
    }
    return notes;
  });

  const addAuthor = (pubkey: string) => {
    // Check if author already exists
    if (authors.value[pubkey]) {
      return;
    }

    try {
      const { type, data } = nip19.decode(pubkey);
      if (type === 'npub') {
        authors.value[pubkey] = {
          pubkey,
          hexkey: data.toString()
        };
      }
    } catch (error) {
      console.error('Error decoding npub:', error);
    }
  };

  const removeAuthor = (pubkey: string) => {
    delete authors.value[pubkey];
  };

  const addRelay = (relay: string) => {
    if (!relays.value.includes(relay)) {
      relays.value.push(relay);
    }
  };

  const removeRelay = (relay: string) => {
    const index = relays.value.indexOf(relay);
    if (index > -1) {
      relays.value.splice(index, 1);
    }
  };

  return {
    //refs
    relays,
    authors,
    events,
    //computed
    users,
    notes,
    //methods
    addAuthor,
    removeAuthor,
    addRelay,
    removeRelay,
  };
});