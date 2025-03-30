<script setup>
import { computed, ref } from 'vue';
import Timer from '@/components/Timer.vue';
import HomeButton from '@/components/HomeButton.vue';

const title = ref('Oeufs Mollet')
const timeNeeded = ref(360) //secondes

</script>

<template>
    <div class="background">
        <div class="timer-header">
            <HomeButton></HomeButton>
        </div>

        <div class="timer-sub-header">
            <h1 class="title"> {{ title }} </h1>
        </div>
        
        <div class="timer-body">
            <Timer :timeNeeded="timeNeeded"/>
        </div>
    </div>
</template>

<style>

.title {
    text-align: center; 
    color: plum; 
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-shadow: 
        1px 1px 0px rgba(0, 0, 0, 1),
        -1px -1px 0px rgba(0, 0, 0, 1),
        -1px 1px 0px rgba(0, 0, 0, 1),
        1px -1px 0px rgba(0, 0, 0, 1);
}

.timer-header {
    padding-top: 2%;
    padding-left: 1%;
}

.timer-sub-header {
    padding-top: 3%;
}

.timer-body {
    padding-top: 5%;
}

</style>