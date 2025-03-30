<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import endSound from '/sounds/magic-wand-6214.mp3';

const props = defineProps(['timeNeeded'])
const timeLeft = ref(props.timeNeeded)
const started = ref(false)
const interval = ref(null)
const imageWidth = ref(null)
const imageHeight = ref(null)

const audio = new Audio(endSound);

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
                audio.play()
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

function getImageSize(ref) {
    const img = this.$refs.startImage;
    this.imageWidth = img.naturalWidth;
    this.imageHeight = img.naturalHeight;
}

</script>

<template>
    <div class="time-container">
    <div class="circle">
        <p class="time"> {{ formattedTime }}</p>
    </div> 
</div>
<p></p>
<div class="container" >
    <button v-if="!started" @click="startTimer" class="time-button" :width="imageWidth" :height="imageHeight">
        <img ref="startImage" src="/images/StartButton.png" @load="getImageSize(this.$refs.startImage)"/>
    </button>
    <button v-if="started" @click="stopTimer" class="time-button" :width="imageWidth" :height="imageHeight"> 
        <img ref="stopImage" src="/images/StopButton.png" @load="getImageSize(this.$refs.stopImage)"/>   
    </button>
</div>
</template>

<style scoped>

.circle {
    width: 200px;
    height: 200px;
    background: plum;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
}

.time-container {
    margin: auto;
    display: flex;
    flex-direction: line;
    align-items: center;
    justify-content: center;
    min-width: 200;
}

.container {
    padding-top: 5%;
    margin: auto;
    display: flex;
    flex-direction: line;
    align-items: center;
    justify-content: center;
    min-width: 200;
}

.time-button {
    text-align: center;
    border: none;
    background: none;
    cursor: pointer;
}

.time {
    text-align: center;
    padding-top: 35%;
    font-size: xx-large;
    color: purple;
}

</style>