<script setup>
const props = defineProps({
  courses: Array,
    prueba: String
});
</script>

<template>
  <div>
    <div v-for="(c, i) in courses" :key="i">
      <h1>{{ c.title }}</h1>
      <p>{{ c.professor }}</p>
      <p>{{ c.price }}</p>
      <p>{{ c.description }}</p>
    </div>
  </div>
  <p>{{ props.prueba }}</p>
</template>


<style scoped>

</style>