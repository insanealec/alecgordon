<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import BestAt from './BestAt.vue';
import SectionDivider from './shared/SectionDivider.vue';
import WorkExperience from './WorkExperience.vue';
</script>

<template>
  <main class="flex flex-col items-center text-slate-200">

    <section class="relative w-full flex justify-center pt-14 pb-10 px-6 overflow-hidden">
      <!-- Background gradient (left glow / ambient) -->
      <div
        class="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
        class="pointer-events-none absolute inset-0
              bg-gradient-to-r from-indigo-900/30 via-transparent to-transparent"
      ></div>

      <!-- Bottom fade overlay -->
      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24
              bg-gradient-to-b from-transparent to-slate-950"
      ></div>
      </div>

      <!-- content -->
      <div class="relative w-full max-w-4xl">
        <AboutMe />
      </div>
    </section>


    <SectionDivider />

    <section class="w-full flex justify-center py-8 px-6 leading-relaxed tracking-tight">
      <div class="w-full max-w-3xl">
        <div class="rounded-xl bg-slate-800/40 border border-slate-700/40 p-7">
          <BestAt class="border-l-2 border-indigo-400/40 pl-4" />
        </div>
      </div>
    </section>

    <SectionDivider />

    <section class="w-full flex justify-center py-8 px-2">
      <div class="w-full max-w-4xl">
        <h3 class="text-xl font-semibold mb-8 text-slate-100">
          Experience
        </h3>

        <WorkExperience />
      </div>
    </section>

  </main>
</template>
