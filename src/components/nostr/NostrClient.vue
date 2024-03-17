<script setup lang="ts">
import { SimplePool, type Event } from 'nostr-tools';
import { ref } from 'vue';

const RELAYS = [
  "wss://relay.exit.pub",
  "wss://relayable.org",
  "wss://relay.damus.io",
  "wss://relay2.nostrasia.net",
  "wss://purplepag.es",
  "wss://nos.lol",
];

const pool = new SimplePool();

const events = ref<Event[]>([]);

let h = pool.subscribeMany(
  [...RELAYS],
  [
    {
      kinds: [0, 1],
      limit: 10,
      // search: "hello world",
    }
  ],
  {
    onevent(event: Event) {
      // this will only be called once the first time the event is received
      events.value.push(event);
    },
    oneose() {
      h.close();
    }
  }
);

h.close();

console.log(pool);
</script>


<template>
  <div>
    <h1>Nostr</h1>
    <p v-for="event in events" :key="event.id">{{ event }}</p>
  </div>
</template>