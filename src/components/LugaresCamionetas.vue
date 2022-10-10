<template>
  <div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button
        v-for="lugarCamioneta in this.listaLugaresCamionetas" :key="lugarCamioneta"
        @click="routerPushTo(lugarCamioneta)" type="button" class="btn btn-primary">
        {{  lugarCamioneta }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      const listaLugaresCamionetas = ['PH', 'Partner', 'Saveiro', 'Titanium', 'Quillayes'];
      return {
        listaLugaresCamionetas
      }
    },
    methods: {
      routerPushTo(route) {
        const isAuthenticated = true;
        if (isAuthenticated) {
          this.$router.push({path: `/stock/riego/${route.toLowerCase()}`})
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