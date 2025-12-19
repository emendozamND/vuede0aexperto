<script setup>
import TwoComponent from "./TwoComponent.vue";
import {ref } from 'vue';
const nombre = ref('Elias Mendoza');
</script>

<template>
<div class="bg-red-500 p-8">
    <p class="text-2xl">
        Hola desde el componente 1
    </p>
    <TwoComponent :nombre="nombre" />
</div>
</template>

<style scoped>

</style>