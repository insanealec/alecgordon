
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { type Event } from 'nostr-tools';
import {
  Metadata,
  ShortTextNote,
} from 'nostr-tools/kinds';
import * as nip19 from 'nostr-tools/nip19';

interface NostrAuthors {
  [pubkey: string]: string;
}

const INITIAL_RELAYS = [
  "wss://relay.exit.pub",
  "wss://relayable.org",
  "wss://relay.damus.io",
  "wss://relay2.nostrasia.net",
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
    authors.value[pubkey] = nip19.decode(pubkey).data.toString();
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
  };
});