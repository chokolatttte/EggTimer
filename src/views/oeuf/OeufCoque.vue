<script setup>
import { computed, ref } from 'vue';
import Timer from '@/components/Timer.vue';

const title = ref('Oeufs à la coque')
const timeNeeded = ref(180) //secondes

</script>

<template>
    <h1> {{ title }} </h1>
    <Timer :timeNeeded="timeNeeded"/>
</template>
