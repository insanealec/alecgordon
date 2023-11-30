<template>
  <div class="w-full flex flex-row justify-between content-center">
    <h4>
      <slot name="name"></slot>
    </h4>
    <span class="flex flex-row">
      <h4>
        <slot name="from"></slot>
        &mdash;
        <slot name="to"></slot>
      </h4>
    </span>
  </div>
</template>

<style scoped>
/*  */
</style>
