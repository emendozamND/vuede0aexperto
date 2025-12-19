<script setup>
const props = defineProps(['nombre']);
</script>

<template>
<div class="bg-yellow-500 p-8">
    <p class="text-2xl">
        Hola desde el componente 3
    </p>
     <p>{{ props.nombre }}</p>
</div>
</template>

<style scoped>

</style>