<script setup>
import {ref} from 'vue';
const count = ref(0);
const increment = (a, event)=>{
  count.value += a;
  console.log(event)
}
const decrement = (a, event)=>{
  count.value -= a;
  console.log(event);
}
</script>

<template>
  <button @click="decrement(2, $event)">-</button>
  <span class="count">
    {{ count }}
  </span>
  <button @click="increment(2, $event)">+</button>
  
 </template>
 <style scoped>
.count{
  margin: 0 10px;
}
 </style>
