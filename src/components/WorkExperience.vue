<script setup lang="ts">
import { JOBS } from '@/data/profile';
</script>

<template>
  <ol class="ml-1.5 border-l border-slate-800">
    <li
      v-for="job in JOBS"
      :key="job.company"
      class="relative pb-12 pl-8 last:pb-0"
    >
      <span
        class="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border-2"
        :class="job.end ? 'border-slate-600 bg-slate-950' : 'border-indigo-300 bg-indigo-400'"
        aria-hidden="true"
      ></span>

      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 class="flex items-center gap-2 text-lg font-semibold text-slate-100">
          {{ job.company }}
          <span
            v-if="!job.end"
            class="rounded-full bg-indigo-400/10 px-2 py-0.5 text-xs font-medium text-indigo-300"
          >
            Current
          </span>
        </h3>
        <span class="font-mono text-sm text-slate-500">{{ job.start }}&ndash;{{ job.end ?? 'now' }}</span>
      </div>
      <p class="text-slate-400">{{ job.title }}</p>

      <ul v-if="job.highlights.length" class="mt-4 space-y-2 text-slate-300">
        <li
          v-for="highlight in job.highlights"
          :key="highlight"
          class="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-indigo-400/70"
        >
          {{ highlight }}
        </li>
      </ul>

      <ul v-if="job.tech.length" class="mt-4 flex flex-wrap gap-2" aria-label="Tech used">
        <li
          v-for="tech in job.tech"
          :key="tech"
          class="rounded-md bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300"
        >
          {{ tech }}
        </li>
      </ul>

      <details v-if="job.details?.length" class="group mt-4 text-sm">
        <summary class="inline-flex cursor-pointer list-none items-center gap-1 text-indigo-300 transition-colors hover:text-indigo-200 [&::-webkit-details-marker]:hidden">
          More detail
          <svg class="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </summary>
        <div class="mt-3 space-y-2 leading-relaxed text-slate-400">
          <p v-for="detail in job.details" :key="detail">{{ detail }}</p>
        </div>
      </details>
    </li>
  </ol>
</template>
