<script setup>
import { ref } from 'vue';
import Timer from '@/components/Timer.vue';
import HomeButton from '@/components/HomeButton.vue';

const foodInfos = ref([
  {id: 0, title: 'Oeuf Dur', timeNeeded: '600'},
  {id: 1, title: 'Oeuf Mollet', timeNeeded: '360'},
  {id: 2, title: 'Oeuf A La Coque', timeNeeded: '180'},
  {id: 3, title: 'Oeuf Au Plat', timeNeeded: '180'}
])

</script>

<template>
    <div class="background">
        <div class="timer-header">
            <HomeButton></HomeButton>
        </div>

        <div class="timer-sub-header">
            <h1 class="timer-title"> {{ foodInfos[$route.params.id].title }} </h1>
        </div>
        
        <div class="timer-body">
            <Timer :timeNeeded="foodInfos[$route.params.id].timeNeeded"/>
        </div>
    </div>
</template>

<style>

.timer-title {
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
    padding-top: 4vh;
    padding-left: 1vh;
    height: 9.6vh;
}

.timer-sub-header {
    height: 19.2vh;
    align-content: center;
}

</style>