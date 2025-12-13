<script setup>
const clase = "bg-red";

</script>
<template>
<p :class="clase">Hola mundo</p>
</template>

<style scoped>
.bg-red {
  background-color: pink;
  padding: 8px;
}
</style>


