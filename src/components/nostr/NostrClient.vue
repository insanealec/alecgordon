<script setup lang="ts">
import { SimplePool, type Event } from 'nostr-tools';
import {
  Metadata,
  ShortTextNote,
  // RecommendRelay,
} from 'nostr-tools/kinds';
import NostrNote from './NostrNote.vue';
import { useNostrStore } from '@/stores/nostr';

const pool = new SimplePool();
const store = useNostrStore();
store.addAuthor('npub1pgr9n72p64ykuxuyywj9xm7q734a7whgxm8xzcq39sggafattlnspjcx05');

let h = pool.subscribeMany(
  store.relays,
  [
    {
      kinds: [Metadata, ShortTextNote],
      limit: 10,
      authors: Object.values(store.authors),
    }
  ],
  {
    maxWait: 1000,
    onevent(event: Event) {
      store.events.push(event);
    },
    oneose() {
      h.close();
    }
  }
);

console.log(pool);
</script>


<template>
  <div>
    <h1>Nostr</h1>
    <template v-for="event in store.events" :key="event.id">
      <NostrNote v-if="event.kind === ShortTextNote" :note="event" />
    </template>
  </div>
</template>