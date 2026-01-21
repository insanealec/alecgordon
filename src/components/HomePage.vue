<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import BestAt from './BestAt.vue';
import SectionDivider from './shared/SectionDivider.vue';
import WorkExperience from './WorkExperience.vue';
</script>

<template>
  <main class="flex flex-col items-center text-slate-200">

    <!-- Social Links -->
    <section class="w-full flex justify-center pt-2 pb-4">
      <div class="flex gap-6">
        <a href="https://github.com/insanealec/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-300 transition-colors duration-200 flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.268.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.93.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/alexanderdevongordon" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-indigo-300 transition-colors duration-200 flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          LinkedIn
        </a>
      </div>
    </section>

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
