<template>
  <div class="w-full flex flex-row justify-between content-center">
    <h3>
      <slot name="name"></slot>
    </h3>
    <span class="flex flex-row">
      <h4>
        <slot name="from"></slot>
      </h4>
      &nbsp;&mdash;&nbsp;
      <h4>
        <slot name="to"></slot>
      </h4>
    </span>
  </div>
</template>

<style scoped>
/*  */
</style>
