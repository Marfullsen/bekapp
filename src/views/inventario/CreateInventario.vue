<template>
  <div class="container">
    <h1 class="d-flex justify-content-center">Registrar producto</h1>
    <form class="row g-3" action="../">
      <div class="col-md-6">
        <label for="inputName" class="form-label">Nombre Producto</label>
        <input type="text" class="form-control" id="inputName" placeholder="Nombre del producto">
      </div>
      <div class="col-md-6">
        <label for="inputCantidadTipos" class="form-label">Cantidad de tipos</label>
        <input type="number" class="form-control" id="inputCantidadTipos" placeholder="Cantidad de tipos">
      </div>
      <div class="col-12">
        <label for="inputSku" class="form-label">SKU</label>
        <input type="text" class="form-control" id="inputSku" placeholder="SKU">
      </div>
      <div class="col-12">
        <label for="inputCantidad" class="form-label">Cantidad</label>
        <input type="text" class="form-control" id="inputCantidad" placeholder="Cantidad">
      </div>
      <div class="mb-3">
        <label for="inputCosto" class="form-label">Costo producto</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">$</span>
          <input type="number" class="form-control" id="inputCosto" placeholder="Costo">
          <div class="invalid-feedback">
            Costo mal ingresado.
          </div>
        </div>
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