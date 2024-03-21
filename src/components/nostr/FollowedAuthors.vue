<script setup lang="ts">
import { useNostrStore } from '@/stores/nostr';
import { ref } from 'vue';

const store = useNostrStore();
let users = ref([] as any[]);
for (let [pubkey, _] of Object.entries(store.authors)) {
  const user = store.users.get(pubkey);
  if (user) {
    users.value.push(JSON.parse(user?.content));
  }
}
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
