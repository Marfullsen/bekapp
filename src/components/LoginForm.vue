<template>
  <section class="container" style="width: 18rem;">
    <form class="container py-4 px-3 m-auto">
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Ingresa Email">
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Ingresa contraseña">
      </div>
      <div class="mb-3 d-flex flex-row-reverse">
        <a href="/">Olvidé la clave</a>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary px-4">Ingresar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style scoped>
section {
  display: flex;
  place-items: center;
}
</style>