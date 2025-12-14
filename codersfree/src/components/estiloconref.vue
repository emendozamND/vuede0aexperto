<script setup>
import {ref, computed} from 'vue';
const pintar = ref(false);
</script>

<template>
 <button @click="pintar = !pintar">
  Pintar
 </button>
 <h1 :class="[pintar ? 'bg-red' : '']">Hola mundo</h1>
</template>
<style scoped>
.bg-red{
  background-color:red;
}
</style>