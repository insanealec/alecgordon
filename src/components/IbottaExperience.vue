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

  </div>

</template>
