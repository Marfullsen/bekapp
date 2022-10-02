<template>
  <div class="wrapper">
    <div class="">Cliente</div>
    <div class="">Stock</div>
    <div class="">Informes</div>
    <div class="">Inventarios</div>
    <div class="">Ingreso</div>
    <div class="">Egreso</div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 20px;
}

.wrapper div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  aspect-ratio: 1;
}

</style>
