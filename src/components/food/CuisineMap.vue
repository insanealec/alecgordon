<script setup lang="ts">
import { ref } from 'vue';

const mapBox = ref();

</script>

<template>
<div>
  <div ref="mapBox" class="map-box flex flex-col min-h-screen max-w-screen"></div>
</div>
</template>

<style lang="scss">
.mapboxgl-canvas {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
