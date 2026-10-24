<script setup lang="ts">
import type { Project } from '@/types/home';

defineProps<{
  project: Project;
}>();

const GITHUB_PATH = 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.268.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.93.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z';
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-colors hover:border-indigo-400/40"
    :class="{ 'lg:grid lg:grid-cols-5': project.featured }"
  >
    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      tabindex="-1"
      aria-hidden="true"
      class="block overflow-hidden border-b border-slate-800"
      :class="{ 'lg:col-span-3 lg:border-r lg:border-b-0': project.featured }"
    >
      <img
        :src="project.image"
        :alt="project.imageAlt"
        width="960"
        height="600"
        loading="lazy"
        decoding="async"
        class="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
      />
    </a>

    <div class="flex flex-1 flex-col p-5" :class="{ 'lg:col-span-2 lg:p-7': project.featured }">
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-semibold text-slate-100" :class="project.featured ? 'text-2xl' : 'text-lg'">
          {{ project.name }}
        </h3>
        <span
          v-if="project.status"
          class="rounded-full bg-amber-400/10 px-2 py-0.5 text-xs font-medium text-amber-300"
        >
          {{ project.status }}
        </span>
      </div>
      <p class="mt-1 text-sm text-indigo-300">{{ project.tagline }}</p>
      <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ project.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2" aria-label="Tech used">
        <li
          v-for="tech in project.tech"
          :key="tech"
          class="rounded-md bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300"
        >
          {{ tech }}
        </li>
      </ul>

      <!-- Pinned to the bottom so links line up across cards -->
      <div class="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 font-medium text-indigo-300 transition-colors hover:text-indigo-200"
        >
          {{ project.linkLabel }}
          <span class="sr-only">{{ project.name }}</span>
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
        <a
          v-if="project.sourceUrl"
          :href="project.sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-slate-200"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" :d="GITHUB_PATH" clip-rule="evenodd" />
          </svg>
          Source
          <span class="sr-only">for {{ project.name }}</span>
        </a>
      </div>
    </div>
  </article>
</template>
