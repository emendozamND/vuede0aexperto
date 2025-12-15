<script setup>
import { ref } from "vue";

const count = ref(0);
const lastEvent = ref(null);

const increment = (a, event) => {
  count.value += a;
  lastEvent.value = event; // guardar el evento
};

const decrement = (a, event) => {
  count.value -= a;
  lastEvent.value = event;
};
</script>

<template>
  <button @click="decrement(2, $event)">-</button>

  <span class="count">{{ count }}</span>

  <button @click="increment(2, $event)">+</button>

  <hr />

  <!-- Mostrar info del evento (lo más útil) -->
  <p v-if="lastEvent">
    type: {{ lastEvent.type }} |
    target: {{ lastEvent.target?.tagName }} |
    x: {{ lastEvent.clientX }} |
    y: {{ lastEvent.clientY }}
  </p>
</template>
