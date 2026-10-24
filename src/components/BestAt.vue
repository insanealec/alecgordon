<script setup lang="ts">
import { STRENGTHS } from '@/data/profile';
</script>

<template>
  <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="strength in STRENGTHS"
      :key="strength.title"
      class="rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-indigo-400/40"
      :class="{ 'sm:col-span-2 lg:col-span-3': strength.wide }"
    >
      <svg
        class="h-6 w-6 text-indigo-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path v-for="path in strength.iconPaths" :key="path" :d="path" />
      </svg>
      <h3 class="mt-3 text-base font-semibold text-slate-100">{{ strength.title }}</h3>
      <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ strength.summary }}</p>
    </li>
  </ul>
</template>
