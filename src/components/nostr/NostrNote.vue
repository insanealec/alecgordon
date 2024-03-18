<script setup lang="ts">
import { type Event } from 'nostr-tools';
import { useNostrStore } from '@/stores/nostr';
import { computed } from 'vue';

const props = defineProps<{
  note: Event;
}>();

const store = useNostrStore();
const user = computed(() => JSON.parse(store.users.get(props.note?.pubkey)?.content));
console.log(user)
</script>

<template>
<div class="card bg-neutral shadow-xl my-2">
  <div class="card-body">
    <h2 class="card-title" v-if="user"><img :src="user.picture" class="h-24" />{{ user.displayName ?? user.display_name ?? user.name }}</h2>
    <p v-html="note.content"></p>
    <div>
      <div v-for="[_, tag] in note.tags" :key="tag" class="badge badge-primary badge-outline m-1 p-3">{{ tag }}</div>
    </div>
  </div>
</div>
</template>