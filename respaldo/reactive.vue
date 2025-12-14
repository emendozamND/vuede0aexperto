<script setup>
import { reactive } from "vue";

/* const count = ref(0); */
const user = reactive({
  name: 'Elias',
  apellido: 'Mendoza',
  edad: 47,
});
const increment = () => {
  user.edad++;
  console.log(count.value);
};

const decrement = () => {
  user.edad--;
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
