<script setup lang="ts">
import { PROJECTS } from '@/data/profile';
import ProjectCard from './ProjectCard.vue';

const featured = PROJECTS.filter((project) => project.featured);
const others = PROJECTS.filter((project) => !project.featured);
</script>

<template>
  <div class="space-y-6">
    <ProjectCard v-for="project in featured" :key="project.name" :project="project" />

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in others" :key="project.name" :project="project" />
    </div>
  </div>
</template>
