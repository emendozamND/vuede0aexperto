<script setup>
import {ref, computed} from 'vue';
const pintar = ref(false);
</script>

<template>
 <button @click="pintar = !pintar">
  Pintar
 </button>
 <h1 :class="[pintar ? 'bg-red' : 'bg-blue', 'text-white']">Hola mundo</h1>
</template>
<style scoped>
.bg-red{
  background-color:red;
}
.bg-blue{
  background-color:blue;
}
.text-white{
  color:white;
}
</style>