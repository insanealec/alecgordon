<script setup lang="ts">
import { FwbToggle  } from 'flowbite-vue';
import { useDark } from '@vueuse/core'

const isDark = useDark();
</script>

<template>
  <FwbToggle v-model="isDark" color="teal" label="Dark Mode" />
</template>
