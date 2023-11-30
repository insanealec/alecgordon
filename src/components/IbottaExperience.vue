<template>
  <div>
    <h2>Ibotta</h2>

    <p class="paragraph">
      During my time as a Senior Fullstack Engineer at <a href="https://ibotta.com/home">Ibotta</a>, I led various projects aimed at enhancing the e-commerce web app. 
      Notable achievements include improving accessibility, navigation improvements, and integrating GraphQL APIs. 
      My collaborative approach enabled me to share my expertise, fostering a culture of learning within the team.
    </p>

    <p class="paragraph">
      A normal project cycle started with initiative planning where I'd take a project proposal and scope out as many epics and tickets the initiative needed. 
      This often involved research into our supporting APIs and existing calls and structures on the website to see what could be re-used, and what would need made fresh. 
      The initiative would start after a presentation of the initiative and epics to the team, which would then kick off ticket work. 
    </p>

    <p class="paragraph">
      Most projects would need planned around keeping the old version still active with LaunchDarkly-powered A/B tests.
      This would sometimes complicate larger redesigns where we'd need to move tightly-coupled components apart to fit a gradually more modular design.
    </p>

    <p class="paragraph">
      The main Ibotta web stack was a Vue 2 SPA using vue-property-decorator which interfaced with a mostly GraphQL backend.
      We also migrated from vue-router to Nuxt intending to use SSR to help some of the slow initial loads for the site.
      Using Figma, we were able to inspect the design with a lot more detail so we could port it to SCSS easier.
    </p>

    <!-- <ul>
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
    </ul> -->
  </div>

</template>
