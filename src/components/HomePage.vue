<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import BestAt from './BestAt.vue';
import SectionDivider from './shared/SectionDivider.vue';
import WorkExperience from './WorkExperience.vue';
</script>

<template>
  <main class="flex flex-col items-center text-slate-200">

    <section class="w-full flex justify-center py-8 px-6">
      <div class="w-full max-w-4xl">
        <AboutMe />
      </div>
    </section>

    <SectionDivider />

    <section class="w-full flex justify-center py-8 px-6">
      <div class="w-full max-w-3xl">
        <div class="rounded-xl bg-slate-800/40 border border-slate-700/50 p-8">
          <BestAt />
        </div>
      </div>
    </section>

    <SectionDivider />

    <section class="w-full flex justify-center py-8 px-2">
      <div class="w-full max-w-4xl">
        <h3 class="text-xl font-semibold mb-10 text-slate-100">
          Experience
        </h3>

        <WorkExperience />
      </div>
    </section>

  </main>
</template>
