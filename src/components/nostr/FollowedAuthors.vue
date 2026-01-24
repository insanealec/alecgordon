<script setup lang="ts">
import { useNostrStore } from '@/stores/nostr';
import { ref, computed } from 'vue';

const store = useNostrStore();
const users = computed(() => {
  const userArray = [];
  for (let [pubkey, _] of Object.entries(store.authors)) {
    const user = store.users.get(pubkey);
    if (user) {
      try {
        const userData = JSON.parse(user.content);
        userArray.push({
          pubkey,
          ...userData
        });
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }
  return userArray;
});
</script>


<template>
  <div class="overflow-x-auto">
    <table class="table table-xs table-pin-cols">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.pubkey">
          <td><img :src="user.picture" class="h-12" /></td>
          <td>{{ user.name }}</td>
          <td>{{ user.about }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
