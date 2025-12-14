<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
  console.log(count.value);
};

const decrement = () => {
  count.value--;
  console.log(count.value);
};
</script>

<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
span{
  padding: 0 10px;
  font-size: 20px;
}
</style>

