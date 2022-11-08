<template>
  <div class="d-flex justify-content-center flex-column align-items-center">
    <h1 class="p-3">Informes</h1>
    <section>
      <informes-listado/>
    </section>
  </div>
</template>

<script>
import InformesListado from '../../components/InformesListado.vue'
  export default {
  components: { InformesListado },
    
  }
</script>