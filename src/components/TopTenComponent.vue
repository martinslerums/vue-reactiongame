<template>
  <div>
    <h2>Top 10 Best Times</h2>
    <ol>
      <li v-for="(time, index) in bestTimes" :key="index">{{ time }} ms</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  bestTimes: {
    type: Array as () => number[],
    required: true
  }
});
</script>

<style scoped>
ol {
  padding-left: 20px;
}

li {
  list-style: decimal;
  margin-bottom: 5px;
}
</style>
