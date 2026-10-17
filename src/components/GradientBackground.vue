<template>
  <div class="relative isolate overflow-hidden">
    <!-- Glows fade to transparent inside the box, so there's no hard edge against the page -->
    <div class="glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true"></div>
    <slot />
  </div>
</template>

<style scoped>
.glow {
  background:
    radial-gradient(ellipse 70% 80% at 0% 0%, rgb(79 70 229 / 0.28), transparent 70%),
    radial-gradient(ellipse 55% 70% at 100% 20%, rgb(124 58 237 / 0.14), transparent 70%);
}
</style>
