<script setup>
import { ref } from 'vue';

const message = ref("Start");

function ToggleView(){
    if (!message.value.localeCompare("Start")) {
        message.value = "Stop";
    }
    else{
        message.value = "Start";
    }
}

</script>

<template>
    <div>
        <button @click="ToggleView"> {{ message }} </button>
    </div>
</template>