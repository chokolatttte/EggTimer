<script setup>
import { computed, ref } from 'vue';
import Timer from '@/components/Timer.vue';
import HomeButton from '@/components/HomeButton.vue';

const title = ref('Oeufs à la coque')
const timeNeeded = ref(180) //secondes

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
    font-size: 15vmin;
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
    padding-top: 1vh;
    padding-left: 1vh;
    height: 10vh;
}

.timer-sub-header {
    height: 20vh;
    align-content: center;
}

</style>