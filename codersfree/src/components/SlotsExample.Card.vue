<!-- src/components/SlotsExampleCard.vue -->
<template>
  <div class="card">
    <header class="card__header">
      <!-- slot con nombre 'header' -->
      <slot name="header">
        <!-- Contenido por defecto si nadie pasa el slot -->
        <h3>Encabezado por defecto</h3>
      </slot>
    </header>

    <main class="card__body">
      <!-- slot por defecto -->
      <slot>
        Contenido por defecto de la tarjeta.
      </slot>
    </main>

    <footer class="card__footer">
      <!-- slot con nombre 'footer' -->
      <slot name="footer">
        <small>Pie por defecto</small>
      </slot>
    </footer>
  </div>
</template>

<script setup>
/* No necesitamos lógica aquí, solo renderear slots */
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-top: 0.75rem;
}
.card__header {
  border-bottom: 1px solid #eee;
  margin-bottom: 0.5rem;
}
.card__footer {
  border-top: 1px solid #eee;
  margin-top: 0.5rem;
  padding-top: 0.25rem;
}
</style>
