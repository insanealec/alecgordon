<script setup lang="ts">
import TimelineCheck from '@/assets/svgs/TimelineCheck.vue';
</script>

<template>
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

    <!-- Roof Maxx -->
    <li>
      <div class="timeline-middle">
        <TimelineCheck />
      </div>

      <div class="timeline-start md:text-end mb-10">
        <time class="font-mono italic">2024&mdash;2026</time>
        <div class="text-lg font-bold">Roof Maxx</div>

        <p class="paragraph">
          As a Senior Software Engineer at Roof Maxx, I worked on a B2B SaaS platform used by dealers and internal
          corporate teams. I focused on building and improving high-impact features within a large Laravel monolith,
          with an emphasis on reliability, performance, and reducing manual operational work.
        </p>

        <p class="paragraph">
          I owned development of a multi-channel notifications system, internal and SaaS invoicing workflows, and
          cost reporting features. I also improved load times on report and index-heavy pages to prevent timeouts
          and improve overall system reliability.
        </p>

        <p class="paragraph">
          My senior contributions came primarily through strong technical ownership, deep product knowledge, and
          consistently delivering solutions that simplified workflows for both dealers and internal teams.
        </p>

        <p class="paragraph">
          <strong>Tech:</strong> Vue, Laravel, MySQL
        </p>
      </div>

      <hr />
    </li>

    <!-- Ibotta -->
    <li>
      <div class="timeline-middle">
        <TimelineCheck />
      </div>

      <div class="timeline-start md:text-end mb-10">
        <time class="font-mono italic">2021&mdash;2023</time>
        <div class="text-lg font-bold">Ibotta</div>

        <p class="paragraph">
          During my time as a Senior Fullstack Engineer at
          <a href="https://ibotta.com/home" target="_blank" rel="noopener noreferrer">Ibotta</a>,
          I led projects focused on improving the e-commerce web experience, including accessibility enhancements,
          navigation improvements, and GraphQL API integrations.
        </p>

        <p class="paragraph">
          I regularly scoped initiatives from initial proposals, researching existing APIs and frontend structures
          to identify opportunities for reuse versus new development. Projects were introduced through team
          presentations before breaking down work into tickets.
        </p>

        <p class="paragraph">
          Many initiatives required supporting legacy and new implementations simultaneously using
          LaunchDarkly-powered A/B tests, which often meant untangling tightly coupled components to move toward a
          more modular design.
        </p>

        <p class="paragraph">
          The main web stack was a Vue 2 SPA with a GraphQL backend. We also began migrating to Nuxt for SSR to improve
          initial load performance, using Figma to closely inspect designs and translate them into SCSS.
        </p>
      </div>

      <div class="timeline-end mb-10">
        <h4 class="italic">Projects</h4>
        <ul class="list-disc list-inside">
          <li><RouterLink to="/card-standardization">Card Standardization</RouterLink></li>
          <li><RouterLink to="/pagination">Pagination</RouterLink></li>
          <li><RouterLink to="/misc">Miscellaneous</RouterLink></li>
        </ul>
      </div>

      <hr />
    </li>

    <!-- McAlear Group -->
    <li>
      <div class="timeline-middle">
        <TimelineCheck />
      </div>

      <div class="timeline-end mb-10">
        <time class="font-mono italic">2015&mdash;2021</time>
        <div class="text-lg font-bold">The McAlear Group</div>

        <p class="paragraph">
          I spent six years as a Software Developer at The McAlear Group, building custom e-commerce applications,
          developing and maintaining numerous internal REST APIs, and supporting a large collection of repositories
          used across sales, manufacturing, and operations.
        </p>
      </div>

      <hr />
    </li>

  </ul>
</template>

<style scoped>
</style>
