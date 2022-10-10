<template>
  <div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button 
        @click="routerPushTo('riego')" type="button" class="btn btn-primary">
        Riego
      </button>
      <button 
        @click="routerPushTo('consumibles')" type="button" class="btn btn-primary">
        Consumibles
      </button>
      <button 
        @click="routerPushTo('herramientas')" type="button" class="btn btn-primary">
        Herramientas
      </button>
      <button 
        @click="routerPushTo('uniformes')" type="button" class="btn btn-primary">
        Informes
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      routerPushTo(route) {
        const isAuthenticated = true;
        if (isAuthenticated) {
          this.$router.push({name: `stock_${route}`})
        } else {
          this.$router.push('/')
        }
      },
    },
  }
</script>

<style scoped>
button {
  background-color: var(--background-color-2);
  border: 1px solid var(--background-color-2);
}

.btn:hover {
  background-color: var(--background-color);
  border-color: var(--background-color);
}
</style>