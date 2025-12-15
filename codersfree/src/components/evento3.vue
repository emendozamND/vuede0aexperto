<script setup>

</script>

<template>
<div @click.="console.log('Hiciste click en el div')">
    <p>
        Hola 
    </p>
    <button @click.stop ="console.log('Hiciste clic en el botón')" >
      Hazme click
    </button>
</div>
<input type="text" @keyup.enter="console.log('Haz presionado la tecla enter')"
</template>

<style scoped>
.count {
  margin: 0 10px;
}
</style>
