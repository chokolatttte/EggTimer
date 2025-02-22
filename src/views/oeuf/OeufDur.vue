<script setup>
import { computed, ref } from 'vue';
import Timer from '@/components/Timer.vue';

const title = ref('Oeufs Durs')
const timeNeeded = ref(600) //secondes

</script>

<template>
    <h1> {{ title }} </h1>
    <Timer :timeNeeded="timeNeeded"/>
</template>

