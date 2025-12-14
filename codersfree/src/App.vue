<script setup>
import {ref } from 'vue';
const awesome = ref(true);
</script>

<template>
  <h1 v-if="awesome">
  Vue es increible  
  </h1>
    <h1 v-else>
  Vue no es increible  
  </h1>

</template>
<style scoped>

</style>