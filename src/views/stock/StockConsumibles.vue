<template>
  <div>
    <h1 class="text-center pb-3">Consumibles</h1>
    <stock-generico
      nombre-generico="Tubería"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2"
    />
    <stock-generico
      nombre-generico="Bencina"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="5 Litros"
    />
    <stock-generico
      nombre-generico="Aceite"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2 Litros"
    />
  </div>
</template>

<script>
import StockGenerico from '../../components/StockGenerico.vue';
  export default {
    components: { StockGenerico }
}
</script>

<style scoped>

</style>