<script setup>
import ThreeComponent from "./ThreeComponent.vue";

const props = defineProps({
  nombre: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="bg-blue-500 p-8">
    <p class="text-2xl">Hola desde el componente 2</p>

    <p>{{ props.nombre }}</p>

    <ThreeComponent :nombre="props.nombre" />
  </div>
</template>

<style scoped>
</style>
