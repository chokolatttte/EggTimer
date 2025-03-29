<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            imageWidth: 0,
            imageHeight: 0
        };
    },
    methods: {
        getImageSize() {
            const img = this.$refs.myImage;
            this.imageWidth = img.naturalWidth;
            this.imageHeight = img.naturalHeight;
        }
    }
}


</script>

<template>
    <RouterLink width="imageWidth" height="imageHeight" :to="'/'">
            <img ref="myImage" src="/images/HomeButton.png" @load="getImageSize">
    </RouterLink>

</template>

