<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

const props = defineProps(['timeNeeded'])
const timeLeft = ref(props.timeNeeded)
const started = ref(false)
const interval = ref(null)

const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
})

const startTimer = () => {
    if (!started.value){
        started.value = true
        interval.value = setInterval(()=> {
            if (timeLeft.value === 0){
                stopTimer()
            }
            else{
                timeLeft.value--
            }
            console.log(timeLeft.value)
        }, 1000)
    }
}

const stopTimer = () => {
    clearInterval(interval.value)
    started.value = false
    timeLeft.value = props.timeNeeded
}

</script>

<template>
    <div class="container">
    <div class="circle">
        <p> {{ formattedTime }}</p>
    </div> 
</div>
<p></p>
<div class="container" >
    <button v-if="!started" @click="startTimer" class="center"> Start </button>
    <button v-if="started" @click="stopTimer" class="center"> Stop </button>
</div>
</template>

<style scoped>

.circle {
    width: 200px;
    height: 200px;
    background: grey;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
}

.container {
    margin: auto;
    display: flex;
    flex-direction: line;
    align-items: center;
    justify-content: center;
    min-width: 200;
}

.center {
    text-align: center;
}

</style>