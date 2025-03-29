<script>

export default {
    props: ['src','link'],

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
  
<RouterLink class="imageButton" width="imageWidth" height="imageHeight" :to="link"> 
    <img ref="myImage" :src="src" @load="getImageSize" style="width: 100%; height: 100%; object-fit: cover;">
</RouterLink>

</template>


<style>

.imageButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
}

.image-button:focus {
  outline: none;
}

</style>