<script setup>
import EggButton from '@/components/EggButton.vue';
import { ref } from 'vue';

const title = "Le paradis des oeufs"

const buttons = ref([
  {id: 1, name: 'Oeuf dur', link: '/oeuf/dur', src: '/images/OeufDurButton.png'},
  {id: 2, name: 'Oeuf mollet', link: '/oeuf/mollet', src: '/images/OeufMolletButton.png'},
  {id: 3, name: 'Ouef à la coque', link: '/oeuf/coque', src: '/images/OeufALaCoqueButton.png'},
  {id: 4, name: 'Oeuf au plat', link: '/oeuf/plat', src: '/images/OeufAuPlatButton.png'}
])

function getImageSize(index) {
  const img = this.buttons[index];
  this.imageWidth = img.naturalWidth;
  this.imageHeight = img.naturalHeight;
}


</script>
        
<template>
    <div class="background">
      <h1 style="color: black; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">{{ title }}</h1>
      <p></p>
      <EggButton v-for="(btn,index) in buttons" :src="btn.src" :link="btn.link"/>
    </div>
</template>

<style>

.background {
  background-image: url(/images/background.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 420px;
  width: 280px;
}

</style>