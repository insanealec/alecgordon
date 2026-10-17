<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const visible = ref(false);
const reducedMotion = usePreferredReducedMotion();

const { isSupported, stop } = useIntersectionObserver(target, ([entry]) => {
  if (entry?.isIntersecting) {
    visible.value = true;
    stop();
  }
}, { threshold: 0.1 });

// Never hide content when we can't (or shouldn't) animate it in
if (!isSupported.value || reducedMotion.value === 'reduce') {
  visible.value = true;
}
</script>

<template>
  <div
    ref="target"
    class="transition duration-700 ease-out motion-reduce:transition-none"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
  >
    <slot />
  </div>
</template>
