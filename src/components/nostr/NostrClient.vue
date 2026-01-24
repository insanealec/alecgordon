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
import AuthorManager from './AuthorManager.vue';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import * as nip19 from 'nostr-tools/nip19';

const pool = new SimplePool();
const store = useNostrStore();
let subCloser: any = null;
const isSubscribed = ref(false);

// Initialize subscription when component is mounted
onMounted(() => {
  if (Object.keys(store.authors).length > 0) {
    subscribeToEvents();
  }
});

// Watch for changes in authors to re-subscribe
watch(() => Object.keys(store.authors).length, () => {
  if (Object.keys(store.authors).length > 0) {
    // Re-subscribe when authors change
    if (subCloser) {
      subCloser.close();
      isSubscribed.value = false;
    }
    subscribeToEvents();
  } else {
    // Clean up if no authors
    if (subCloser) {
      subCloser.close();
      isSubscribed.value = false;
    }
  }
});

// Clean up subscription on unmount
onUnmounted(() => {
  if (subCloser) {
    subCloser.close();
    isSubscribed.value = false;
  }
});

const subscribeToEvents = () => {
  if (Object.keys(store.authors).length > 0) {
    subCloser = pool.subscribeMany(
      store.relays,
      [
        {
          kinds: [Metadata, ShortTextNote],
          limit: 10,
          authors: Object.values(store.authors).map((author) => author.hexkey),
        }
      ],
      {
        maxWait: 1000,
        onevent(event: Event) {
          // Check if event already exists to avoid duplicates
          const exists = store.events.some(e => e.id === event.id);
          if (!exists) {
            store.events.push(event);
          }
        },
        oneose() {
          // Handle end of subscription stream
          isSubscribed.value = false;
        }
      }
    );
    isSubscribed.value = true;
  }
};

// For testing - add a default author
// store.addAuthor('npub1hp7xxg4mk0yu6k05z5sc5j2k05k3fwl6tccv3ngcjg6t4728tm3qga22el');
</script>


<template>
  <div>
    <h1 class="text-3xl font-bold my-4">Nostr Client</h1>

    <AuthorManager />

    <div class="my-4">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold">Recent Notes</h2>
        <span v-if="isSubscribed" class="badge badge-success">Connected</span>
        <span v-else class="badge badge-warning">Disconnected</span>
      </div>
    </div>

    <template v-for="event in store.events" :key="event.id">
      <NostrNote v-if="event.kind === ShortTextNote" :note="event" />
    </template>

    <FollowedAuthors />
  </div>
</template>