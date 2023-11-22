<script setup lang="ts">
import ProjectHighlight from './ProjectHighlight.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <ProjectHighlight>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Ibotta</template>

    Worked on the logged-in webapp experience for <a href="https://ibotta.com/home">Ibotta</a>.

    <ul>
    <li>
      created affiliate card components that share logic and has numerous options for size, sorting, and configurations allowing normal responsive collapsing or collapsing into a carousel at various screen sizes
    </li>
    <li>led gallery pagination project
      <ul>
        <li>entirely front-end</li>
        <li>created pagination functionality
          <ul>
            <li>takes an asynchronously-loaded list of CPG items and paginates with distinct categories</li>
            <li>allows instant re-pagination when changing category filters</li>
            <li>remembers selected filters and page history via custom state management</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>implemented design for retailer price comparison</li>
    <li>standardized event-bus process for modal implementations</li>
    <li>integrated CPRA/CCPA solution to help protect customer privacy</li>
    <li>worked on numerous A/B tests
      <ul>
        <li>all projects listed above were carefully tested before release</li>
        <li>multiple homepage reworks to change what content would be most noticable to savers</li>
      </ul>
    </li>
    </ul>
  </ProjectHighlight>

  <ProjectHighlight>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </ProjectHighlight>

  <ProjectHighlight>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </ProjectHighlight>

  <ProjectHighlight>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </ProjectHighlight>

  <ProjectHighlight>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </ProjectHighlight>
</template>
