<script setup lang="ts">
import AboutMe from './AboutMe.vue';
import BestAt from './BestAt.vue';
import SectionDivider from './shared/SectionDivider.vue';
import WorkExperience from './WorkExperience.vue';
import SocialLinks from './SocialLinks.vue';
import GradientBackground from './GradientBackground.vue';

const socialLinks = [
  {
    url: "https://github.com/insanealec/",
    label: "GitHub",
    icon: "github"
  },
  {
    url: "https://linkedin.com/in/alexanderdevongordon",
    label: "LinkedIn",
    icon: "linkedin"
  }
];
</script>

<template>
  <main class="flex flex-col items-center text-slate-200">

    <SocialLinks :links="socialLinks" />

    <GradientBackground>
      <AboutMe />
    </GradientBackground>

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
