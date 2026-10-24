<script setup lang="ts">
import RevealOnScroll from './shared/RevealOnScroll.vue';
import SectionHeading from './shared/SectionHeading.vue';
import SiteHeader from './SiteHeader.vue';
import HeroSection from './HeroSection.vue';
import StatsStrip from './StatsStrip.vue';
import BestAt from './BestAt.vue';
import WorkExperience from './WorkExperience.vue';
import AboutMe from './AboutMe.vue';
import ProjectsSection from './ProjectsSection.vue';
import ContactFooter from './ContactFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-300 antialiased">
    <SiteHeader />

    <main>
      <HeroSection />

      <section aria-label="At a glance" class="mx-auto max-w-4xl px-6">
        <StatsStrip />
      </section>

      <section class="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <RevealOnScroll>
          <SectionHeading>What I’m best at</SectionHeading>
          <BestAt />
        </RevealOnScroll>
      </section>

      <section id="experience" class="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <RevealOnScroll>
          <SectionHeading>Experience</SectionHeading>
          <WorkExperience />
        </RevealOnScroll>
      </section>

      <section id="about" class="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <RevealOnScroll>
          <SectionHeading>About</SectionHeading>
          <AboutMe />
        </RevealOnScroll>
      </section>

      <section id="projects" class="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <RevealOnScroll>
          <SectionHeading>Side projects</SectionHeading>
          <ProjectsSection />
        </RevealOnScroll>
      </section>
    </main>

    <ContactFooter />
  </div>
</template>
