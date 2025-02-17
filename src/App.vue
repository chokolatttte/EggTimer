<script setup>
import { createApp } from 'vue';
import EggButton from './components/EggButton.vue';
import { ref } from 'vue';

const app = createApp({
  data(){
    return{
      title: "Le paradis des oeufs"
    }
  }
})

app.mount('#app')

const buttons = ref([
  {id: 1, name: 'Oeuf dur'},
  {id: 2, name: 'Oeuf mollet'},
  {id: 3, name: 'Ouef à la coque'},
  {id: 4, name: 'Oeuf au plat'}
])

</script>

<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <EggButton v-for="btn in buttons" :name="btn.name"/>
  </div>
  
</template>

<style scoped>

</style>
