<script setup lang="ts">
import { SimplePool, type Event } from 'nostr-tools';
import {
  Metadata,
  ShortTextNote,
  // RecommendRelay,
} from 'nostr-tools/kinds';
import NostrNote from './NostrNote.vue';
import { useNostrStore } from '@/stores/nostr';
import FollowedAuthors from './FollowedAuthors.vue';

const pool = new SimplePool();
const store = useNostrStore();
// store.addAuthor('npub1hp7xxg4mk0yu6k05z5sc5j2k05k3fwl6tccv3ngcjg6t4728tm3qga22el');

// let subCloser = pool.subscribeMany(
//   store.relays,
//   [
//     {
//       kinds: [Metadata, ShortTextNote],
//       limit: 10,
//       authors: Object.values(store.authors).map((author) => author.hexkey),
//     }
//   ],
//   {
//     maxWait: 1000,
//     onevent(event: Event) {
//       store.events.push(event);
//     },
//     oneose() {
//       subCloser.close();
//     }
//   }
// );
</script>


<template>
  <div>
    <h1>Nostr</h1>
    <template v-for="event in store.events" :key="event.id">
      <NostrNote v-if="event.kind === ShortTextNote" :note="event" />
    </template>

    <FollowedAuthors />
  </div>
</template>