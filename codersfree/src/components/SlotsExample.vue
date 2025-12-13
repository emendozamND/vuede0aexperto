<!-- src/components/SlotsExample.vue -->
<template>
  <section>
    <h2>Slots básicos</h2>

    <CardBase>
      <template #header>
        <h3>Encabezado desde el padre</h3>
      </template>

      <p>
        Este contenido va en el <strong>slot por defecto</strong> del componente
        CardBase.
      </p>

      <template #footer>
        <small>Pie de tarjeta también definido en el padre</small>
      </template>
    </CardBase>
  </section>
</template>

<script setup>
import CardBase from './SlotsExampleCard.vue'
</script>
