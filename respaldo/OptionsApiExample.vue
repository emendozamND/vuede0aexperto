<template>
  <section>
    <h2>Options API</h2>
    <p>Contador: {{ counter }}</p>
    <button @click="increment">Incrementar</button>
  </section>
</template>

<script>
export default {
  // data = estado reactivo
  data() {
    return {
      counter: 0,
    }
  },
  // methods = funciones de la instancia
  methods: {
    increment() {
      this.counter++
    },
  },
}
</script>
