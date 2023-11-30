<script setup lang="ts">
//
</script>

<template>
  <div>
    <h3>Ibotta</h3>

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
  </div>

</template>
