<script setup lang="ts">
import { STATS } from '@/data/profile';
</script>

<template>
  <dl class="grid gap-4 sm:grid-cols-3">
    <div
      v-for="stat in STATS"
      :key="stat.label"
      class="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-4"
    >
      <dt class="text-sm text-slate-400">{{ stat.label }}</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight text-slate-50">{{ stat.value }}</dd>
    </div>
  </dl>
</template>
