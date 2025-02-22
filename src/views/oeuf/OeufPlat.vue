<script setup>
import { computed, ref } from 'vue';
import Timer from '@/components/Timer.vue';

const title = ref('Oeufs au Plat')
const timeNeeded = ref(180) //secondes

</script>

<template>
    <h1> {{ title }} </h1>
    <Timer :timeNeeded="timeNeeded"/>
</template>
