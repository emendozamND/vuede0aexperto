<script setup>
const props = defineProps({
  courses: { type: Array, required: true },
  count: { type: Number, default: 0 }
});

const emit = defineEmits(["decrementCount"]);
</script>

<template>
  <div>
    <div v-for="(c, i) in props.courses" :key="i">
      <h1>{{ c.title }} ({{ props.count }})</h1>
      <p>{{ c.professor }}</p>
      <p>{{ c.price }}</p>
      <p>{{ c.description }}</p>
    </div>

    <button @click="emit('decrementCount',2)">
      Hazme click
    </button>
  </div>
</template>
