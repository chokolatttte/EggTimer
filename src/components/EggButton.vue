<script setup>
defineProps(['name','link'])

</script>

<template>
  
<button>
    <RouterLink :to="link"> {{ name }} </RouterLink>
</button>

</template>
