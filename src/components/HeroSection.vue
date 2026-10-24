<script setup lang="ts">
import { JOBS, LINKEDIN_URL, SOCIAL_LINKS } from '@/data/profile';
import GradientBackground from './GradientBackground.vue';
import SocialLinks from './SocialLinks.vue';

const currentJob = JOBS.find((job) => !job.end);
</script>

<template>
  <GradientBackground>
    <section class="mx-auto max-w-4xl px-6 pb-14 pt-20 sm:pb-20 sm:pt-28">
      <p
        v-if="currentJob"
        class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
        {{ currentJob.title }} at {{ currentJob.company }}
      </p>

      <h1 class="mt-6 text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl">
        Alec Gordon
      </h1>

      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
        Senior full-stack engineer. I build the systems businesses run on, like billing, logistics, and reporting,
        and I ship my own products on the side.
      </p>

      <p class="mt-3 text-sm text-slate-500">
        Vue · Laravel · C# · Maumee, OH (remote)
      </p>

      <div class="mt-9 flex flex-wrap items-center gap-3">
        <a
          :href="LINKEDIN_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
        >
          Get in touch
        </a>
        <SocialLinks :links="SOCIAL_LINKS" icon-only class="ml-2" />
      </div>
    </section>
  </GradientBackground>
</template>
