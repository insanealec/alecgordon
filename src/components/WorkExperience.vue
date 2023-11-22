<template>
  <div class="flex flex-row justify-apart content-center">
    <h3>
      <slot name="name"></slot>
    </h3>
    <h4>
      <slot name="from"></slot>
    </h4>
    &mdash;
    <h4>
      <slot name="to"></slot>
    </h4>
  </div>
</template>

<style scoped>
/*  */
</style>
