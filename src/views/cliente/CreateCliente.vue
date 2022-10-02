<template>
  <div class="container">
    <h1 class="d-flex justify-content-center">Registrar cliente</h1>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputName" class="form-label">Nombre Cliente</label>
        <input type="text" class="form-control" id="inputName" placeholder="Nombre del cliente">
      </div>
      <div class="col-md-6">
        <label for="inputCellphone" class="form-label">Número de contacto</label>
        <input type="tel" class="form-control" id="inputCellphone" placeholder="Teléfono o celular">
      </div>
      <div class="col-12">
        <label for="inputEmail" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Correo electrónico">
      </div>
      <div class="mb-3">
        <label for="textAreaNotas" class="form-label">Notas</label>
        <textarea class="form-control" id="textAreaNotas" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Subir archivo</label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary px-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/></svg>
          &nbsp;Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>