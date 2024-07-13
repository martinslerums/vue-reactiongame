<template>
  <div>
    <h2>Your results</h2>
    <p class="rank">{{ rank }}</p>
    <p>Reaction time: {{ props.score }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps(['score']);

let rank = ref<string>(''); 

onMounted(() => {
  if (props.score < 250) {
    rank.value = "Ninja Fingers";
  } else if (props.score < 400) {
    rank.value = "Rapid Reflexes";
  } else {
    rank.value = "Snail pace...";
  }
});
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
