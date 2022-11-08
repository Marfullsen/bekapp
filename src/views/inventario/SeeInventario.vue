<template>
  <div>
    <h1 class="d-flex justify-content-center">Inventario</h1>
    <p class="d-flex justify-content-center text-muted">
      Sin productos registrados.
    </p>
    <div id="floating-button" @click="handleCreateCliente">
      <p class="plus noselect">+</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCreateCliente() {
      this.$router.push('/inventario/nuevo/')
    }
  }
};
</script>

<style scoped>
#floating-button {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #db4437;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

#floating-button:hover {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}

.plus {
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 38px;
  font-family: "Roboto";
  font-weight: 300;
}
</style>
