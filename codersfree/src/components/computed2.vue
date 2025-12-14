<script setup>
import { reactive, computed } from "vue";

const user = reactive({
  name: "Elias",
  apellido: "Mendoza",
  edad: 16,
});

const estado = computed(() => {
  return user.edad >= 18 ? "Eres mayor de Edad" : "Eres menor de Edad";
});

const increment = () => {
  user.edad++;
  console.log(user.edad);
};

const decrement = () => {
  user.edad--;
  console.log(user.edad);
};
</script>

<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ user.edad }}</span>
    <button @click="increment">+</button>
    <h1>{{ estado }}</h1>
  </div>
</template>
