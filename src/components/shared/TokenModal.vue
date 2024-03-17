<script setup lang="ts">
import { ref, computed } from 'vue';
import { useToggle } from '@vueuse/core';
import { useMapStore } from '@/stores/map';

// User Mapbox Token mutex
const isLocked = ref(false);
const toggleLock = useToggle(isLocked);
const lockStyle = computed(() => isLocked.value ? 'pointer-events-none select-none blur-sm' : '');

const mapStore = useMapStore();

const tempToken = ref(mapStore.accessToken);
if (tempToken.value) isLocked.value = true;

const submit = () => {
  if (!tempToken.value) return;
  if (isLocked.value) {
    tempToken.value = '';
  }
  mapStore.accessToken = tempToken.value;
  toggleLock();
}

</script>

<template>
<button class="btn btn-secondary" onclick="token_modal.showModal()">Enable Maps...</button>
<dialog id="token_modal" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
    </form>
    <h3 class="font-bold text-lg">Enter Mapbox API Token</h3>
    <p class="py-4">Enter your own <a href="https://www.mapbox.com/" class="link">Mapbox Token</a> to enable map features. Your token is only saved to your browser.</p>
    <form class="join w-full mb-1" @submit.prevent="submit">
      <input v-model.trim="tempToken" :disabled="isLocked" :class="lockStyle" class="join-item" type="text" id="token" name="token" placeholder="Mapbox API Token" />
      <button type="submit" class="btn btn-primary join-item whitespace-nowrap py-2 px-3 font-semibold">{{ isLocked ? 'Clear' : 'Save & Hide' }}</button>
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>Close</button>
  </form>
</dialog>
</template>