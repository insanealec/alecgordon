<script setup lang="ts">
withDefaults(defineProps<{
  gradientConfig?: {
    direction?: string;
    colors?: string[];
    opacity?: number;
  };
}>(), {
  gradientConfig: () => ({
    direction: 'to-r',
    colors: ['indigo-900/30', 'transparent', 'transparent'],
    opacity: 30
  })
});
</script>

<template>
  <section class="relative w-full flex justify-center pt-14 pb-10 px-6 overflow-hidden">
    <!-- Background gradient (left glow / ambient) -->
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div
        :class="`pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-transparent`"
      ></div>

      <!-- Bottom fade overlay -->
      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24
              bg-gradient-to-b from-transparent to-slate-950"
      ></div>
    </div>

    <!-- content -->
    <div class="relative w-full max-w-4xl">
      <slot />
    </div>
  </section>
</template>