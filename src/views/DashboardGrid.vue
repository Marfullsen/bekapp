<template>
  <div class="wrapper noselect">
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
  max-width: 500px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 20px;
}

.wrapper div {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  aspect-ratio: 1;
}

</style>
