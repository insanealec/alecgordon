<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFoodStore, CUISINES } from '@/stores/food';
import { Pie } from 'vue-chartjs';
import { Chart, Colors, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { useToggle } from '@vueuse/core';

Chart.register(Colors, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);
// Match text to site color
Chart.defaults.color = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('color');
const CHART_OPTIONS = {
  responsive: true,
  plugins: {
    colors: {
      // Dynamic colors
      forceOverride: true,
    },
    legend: {
      title: {
        text: 'Click a match to find restaurants',
        display: true,
      },
    }
  }
};

const currentTab = ref(0);
const showMatches = ref(false);
const toggleChart = useToggle(showMatches);
const chartRef = ref();
const food = useFoodStore();

const chartData = computed(() => {
  const labels = Object.keys(food.matches);
  const data = Object.values(food.matches);
  return {
    labels,
    datasets: [{ data, label: '# matches' }],
  };
})

const addPerson = () => {
  currentTab.value = food.addPerson();
}

const chartClick = (event: any) => {
  const chart = chartRef.value.chart;
  const clickedEl = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
  console.log(chart, clickedEl)
}

</script>

<template>
<div role="tablist" class="tabs tabs-lifted">

  <template v-for="(person, index) in food.people" :key="person">
    <input v-model="currentTab" :value="index" type="radio" name="peopleTabs" role="tab" class="tab h-16 sm:h-8" :aria-label="person.name" />
    <div role="tabpanel" class="tab-content bg-neutral border-base-300 rounded-box p-6">
      <div class="w-full mb-1">
        <div v-for="cuisine in CUISINES" :key="cuisine" class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{{ cuisine }}</span>
            <input type="checkbox" class="checkbox" :value="cuisine" v-model="person.cuisines" />
          </label>
        </div>
      </div>
    </div>
  </template>

  <button @click="addPerson" name="peopleTabs" role="tab" class="tab h-16 sm:h-8" aria-label="Add Person">Add Person</button>

</div>

<button @click="toggleChart()" class="btn btn-primary w-full">Meet</button>

<div v-if="showMatches" class="mt-3">
  <Pie id="pie-chart" :options="CHART_OPTIONS" :data="chartData" ref="chartRef" @click="chartClick" />
</div>

</template>

<style lang="scss">
.tab {
  --tab-bg: oklch(var(--n));
}
</style>