<template>
  <div class="wrapper noselect">
    <div @click="routerPushTo('cliente')">Cliente</div>
    <div @click="routerPushTo('stock')">Stock</div>
    <div @click="routerPushTo('informes')">Informes</div>
    <div @click="routerPushTo('inventarios')">Inventarios</div>
    <div @click="routerPushTo('ingreso')">Ingreso</div>
    <div @click="routerPushTo('egreso')">Egreso</div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    routerPushTo(route) {
      const isAuthenticated = true;
      if (isAuthenticated) {
        this.$router.push(route)
      } else {
        this.$router.push('/login')
      }
    },
  }
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
  font-family: fantasy;
  font-size: xx-large;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: green;
  aspect-ratio: 1;
}

</style>
