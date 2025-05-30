<script setup>
import EggButton from '@/components/EggButton.vue';
import { ref } from 'vue';

const title = "Le paradis des oeufs"

const buttons = ref([
  {id: 0, src: '/images/OeufDurButton.png'},
  {id: 1, src: '/images/OeufMolletButton.png'},
  {id: 2, src: '/images/OeufALaCoqueButton.png'},
  {id: 3, src: '/images/OeufAuPlatButton.png'}
])

</script>
        
<template>
    <div class="background">
      <div class="header">
        <h1 class="title ">{{ title }}</h1>
      </div>
      
      <div class="body">
        <div class="card" v-for="(btn,index) in buttons" >
          <EggButton :src="btn.src" :link="'/timer/' + btn.id"/>
        </div>
      </div>
      
    </div>
</template>

<style>

.background {
  background-image: url(/images/background.jpg);
  height: 100vh;
  width: 100vw;
}

.header {
  margin-left: 3vw;
  margin-right: 3vw;
}

.title {
  padding-top: 10vmin;
  font-size: 14vmin;
  text-align: center; 
  color: plum; 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-shadow: 
      0.3vmin 0.3vmin 0px rgba(0, 0, 0, 1),
      -0.3vmin -0.3vmin 0px rgba(0, 0, 0, 1),
      -0.3vmin 0.03vmin 0px rgba(0, 0, 0, 1),
      0.3vmin -0.3vmin 0px rgba(0, 0, 0, 1);
}

.body {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 3vw;
}

.card {
  width: 41vw;
  margin: 3vw;
}


</style>