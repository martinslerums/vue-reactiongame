<template>
  <div>
    <h1>{{ title }}</h1>

    <button @click="startGame" :disabled="isPlaying">Play</button>

    <BlockComponent v-if="isPlaying" :delay="delay" @end="endGame"/>
    <ResultsComponent v-if="showResults" :score="score" />
    <TopTenComponent :bestTimes="bestTimes" />
    
  </div>
</template>

<script setup lang="ts">
import BlockComponent from "../components/BlockComponent.vue";
import ResultsComponent from "../components/ResultsComponent.vue";
import TopTenComponent from "../components/TopTenComponent.vue";
import { ref } from 'vue';

const isPlaying = ref(false);
const showResults = ref(false);

let delay = 0;
let score = 0;
const bestTimes = ref<number[]>([]);
const title = 'Reaction Timer Game';

const startGame = () => {
  showResults.value = false;
  const baseDelay = 2000;
  const randomDelay = Math.random() * 3000;
  delay = baseDelay + randomDelay;
  isPlaying.value = true;
};

const endGame = (reactionTime: number) => {
  score = reactionTime;
  isPlaying.value = false;
  showResults.value = true;
  updateBestTimes(reactionTime);
};

const updateBestTimes = (reactionTime: number) => {
  bestTimes.value.push(reactionTime);
  bestTimes.value.sort((a, b) => a - b);
  if (bestTimes.value.length > 10) {
    bestTimes.value.pop(); 
  }
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid black;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
