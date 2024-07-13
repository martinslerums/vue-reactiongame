<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: props.theme === 'sale' }">
      <slot>Default Content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <div>
        <slot name="button" @click.self="closeModalTwo"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  theme: { type: String }
})

const emit = defineEmits(['close',])

const closeModal = () => {
  emit('close')
}

const closeModalTwo = () => {
  emit('close')
}


</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}

.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>

<!-- <template>
  <h1>{{ title }}</h1>

  <teleport to="#modals" v-if="showModal">
    <ModalComponent theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price!</p> 
      
      <template v-slot:button>
        <button @click="toggleModalTwo">Different modal</button>
      </template>
    </ModalComponent>
  </teleport>

  <teleport to="#modals" v-if="showModalTwo">
    <ModalComponent @close="toggleModalTwo">
      <h1>Second modal</h1>
      <p>Hello from second modal?</p>
    </ModalComponent>
  </teleport>

  <button @click="toggleModal">Show modal</button>

</template>

<script setup lang="ts">
import ModalComponent from './components/ModalComponent.vue'
import { ref } from 'vue';
const title = "My First Vue App"

const showModal = ref(false);
const showModalTwo = ref(false);

const toggleModalTwo = () => {
showModalTwo.value = !showModalTwo.value
}

const toggleModal = () => {
  showModal.value = !showModal.value;
  console.log(showModal.value);
}

</script>

<style>
  #app, #modals {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    columns: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    border-bottom: 1px solid black;
  }

</style> -->
