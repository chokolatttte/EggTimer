<script setup>
import EggButton from '@/components/EggButton.vue';
import { ref } from 'vue';

const title = "Le paradis des oeufs"

const buttons = ref([
  {id: 1, name: 'Oeuf dur', link: '/oeuf/dur'},
  {id: 2, name: 'Oeuf mollet', link: '/oeuf/mollet'},
  {id: 3, name: 'Ouef à la coque', link: '/oeuf/coque'},
  {id: 4, name: 'Oeuf au plat', link: '/oeuf/plat'}
])

</script>
        
<template>
    <h1>{{ title }}</h1>
    <p></p>
    <EggButton v-for="btn in buttons" :name="btn.name" :link="btn.link"/>
</template>