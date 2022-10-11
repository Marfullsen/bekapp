<script setup>
defineProps({
  nombreGenerico: String,
  imagenGenerica: String,
  cantidadGenerica: String
})
</script>

<template>
  <div class="d-flex border border-dark w-75 m-auto p-2 mb-2 justify-content-evenly">
    <img :src="imagenGenerica" alt="tuberias" width="100">
    <div style="width: 80%;">
      <p class="border border-dark rounded text-center m-2 p-2">{{  nombreGenerico }}</p>
      <p class="border border-dark rounded text-center m-2 p-2">{{ cantidadGenerica }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>