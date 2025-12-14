<script setup>
import { ref } from "vue";

/* const count = ref(0); */
const user = ref({
  name: 'Elias',
  apellido: 'Mendoza',
  edad: 47,
});
const increment = () => {
  user.value.edad++;
  console.log(count.value);
};

const decrement = () => {
  user.value.edad--;
  console.log(count.value);
};
</script>

<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ user.edad }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
span{
  padding: 0 10px;
  font-size: 20px;
}
</style>
