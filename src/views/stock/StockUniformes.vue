<template>
  <div>
    <h1 class="text-center pb-3">Consumibles</h1>
    <stock-generico
      nombre-generico="Polera"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2"
    />
    <stock-generico
      nombre-generico="Pantalón"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="5"
    />
    <stock-generico
      nombre-generico="Zapatos"
      imagen-generica="/src/assets/tuberias.webp"
      cantidad-generica="2 pares"
    />
  </div>
</template>

<script>
import StockGenerico from '../../components/StockGenerico.vue';
  export default {
    components: { StockGenerico }
}
</script>