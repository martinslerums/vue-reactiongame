<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps(['delay']);
const emits = defineEmits(['end']);

const showBlock = ref(false);
let timer: number = 0;
let reactionTime = ref(0); 

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true;
    startTimer();
  }, props.delay);
});

const startTimer = () => {
  timer = setInterval(() => {
    reactionTime.value += 10; 
  }, 10);
};

const stopTimer = () => {
  clearInterval(timer); 
  emits('end', reactionTime.value); 
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  cursor: pointer;
}
</style>
