<script setup>
import {ref} from 'vue';
const count = ref(0);
const increment = (a)=>{
  count.value += a;
}
const decrement = (a)=>{
  count.value -= a;
}
</script>

<template>
  <button @click="decrement(2)">-</button>
  <span class="count">
    {{ count }}
  </span>
  <button @click="increment(2)">+</button>
  
 </template>
 <style scoped>
.count{
  margin: 0 10px;
}
 </style>
