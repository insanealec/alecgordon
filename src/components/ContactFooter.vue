<script setup lang="ts">
import { LINKEDIN_URL, SOCIAL_LINKS } from '@/data/profile';
import SocialLinks from './SocialLinks.vue';

const YEAR = new Date().getFullYear();
// LinkedIn already has its own button above
const OTHER_LINKS = SOCIAL_LINKS.filter((link) => link.url !== LINKEDIN_URL);
</script>

<template>
  <footer class="border-t border-slate-800">
    <div id="contact" class="mx-auto max-w-4xl px-6 py-20 text-center">
      <h2 class="text-3xl font-semibold tracking-tight text-slate-50">Let’s talk</h2>
      <p class="mt-3 text-slate-400">LinkedIn is the fastest way to reach me.</p>

      <a
        :href="LINKEDIN_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-indigo-400 hover:text-indigo-200"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z" />
        </svg>
        Message me on LinkedIn
      </a>

      <SocialLinks :links="OTHER_LINKS" class="mt-6 justify-center" />
    </div>

    <div class="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 border-t border-slate-800/60 px-6 py-6 text-xs text-slate-500">
      <span>&copy; {{ YEAR }} Alec Gordon</span>
      <span class="flex gap-4">
        <RouterLink to="/demo/betterlist" class="transition-colors hover:text-slate-300">Playground</RouterLink>
        <a
          href="https://github.com/insanealec/alecgordon"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-slate-300"
        >
          Site source
        </a>
      </span>
    </div>
  </footer>
</template>
