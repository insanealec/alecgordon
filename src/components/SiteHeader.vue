<script setup lang="ts">
// Contact gets its own always-visible button
const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
];

const scrollBehavior = (): ScrollBehavior => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
};

// Hash routing owns the URL fragment, so scroll in code instead of using #anchors
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
};
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-sm">
    <div class="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
      <button
        type="button"
        class="font-semibold text-slate-100 transition-colors hover:text-indigo-300"
        @click="scrollToTop"
      >
        Alec Gordon
      </button>

      <nav aria-label="Page sections" class="flex items-center gap-1 text-sm sm:gap-2">
        <button
          v-for="section in SECTIONS"
          :key="section.id"
          type="button"
          class="hidden rounded-md px-3 py-1.5 text-slate-400 transition-colors hover:text-slate-100 sm:inline-flex"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </button>
        <button
          type="button"
          class="ml-1 rounded-md border border-slate-700 px-3 py-1.5 text-slate-200 transition-colors hover:border-indigo-400 hover:text-indigo-200"
          @click="scrollToSection('contact')"
        >
          Contact
        </button>
      </nav>
    </div>
  </header>
</template>
