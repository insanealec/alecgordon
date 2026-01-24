<script setup lang="ts">
import { ref } from 'vue';
import { useNostrStore } from '@/stores/nostr';

const store = useNostrStore();
const npubInput = ref('');

const addAuthor = () => {
  if (npubInput.value.trim()) {
    store.addAuthor(npubInput.value.trim());
    npubInput.value = '';
  }
};

const removeAuthor = (pubkey: string) => {
  store.removeAuthor(pubkey);
};
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-4 my-4">
    <h2 class="card-title">Nostr Authors</h2>
    
    <div class="form-control my-4">
      <label class="label">
        <span class="label-text">Add Author (npub)</span>
      </label>
      <div class="input-group">
        <input 
          v-model="npubInput" 
          type="text" 
          placeholder="Enter npub key" 
          class="input input-bordered w-full"
        />
        <button @click="addAuthor" class="btn btn-primary">Add</button>
      </div>
    </div>

    <div class="my-4">
      <h3 class="font-bold">Followed Authors</h3>
      <div v-if="Object.keys(store.authors).length === 0" class="text-gray-500 italic">
        No authors followed yet
      </div>
      <div v-else class="flex flex-wrap gap-2">
        <div 
          v-for="(author, pubkey) in store.authors" 
          :key="pubkey"
          class="badge badge-outline badge-primary"
        >
          {{ author.pubkey.substring(0, 12) }}...
          <button @click="removeAuthor(pubkey)" class="ml-2 btn btn-xs btn-circle btn-ghost">×</button>
        </div>
      </div>
    </div>
  </div>
</template>