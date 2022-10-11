<template>
  <div>
    <h1 class="text-center pb-3">Consumibles</h1>
    <stock-generico
      nombre-generico="Llave francesa"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2"
    />
    <stock-generico
      nombre-generico="Caimán"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2"
    />
    <stock-generico
      nombre-generico="Alicate"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2"
    />
  </div>
</template>

<script>
import StockGenerico from '../../components/StockGenerico.vue';
  export default {
    components: { StockGenerico }
}
</script>