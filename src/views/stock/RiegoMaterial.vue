<template>
  <div class="container">
    <div
      v-for="material in this.listaMateriales" :key="material"
      class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" :id="`panelsStayOpen-heading${material}`">
          <button class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#panelsStayOpen-collapse${material}`"
            aria-expanded="true"
            :aria-controls="`panelsStayOpen-collapse${material}`">
            {{  material }}
          </button>
        </h2>
        <div :id="`panelsStayOpen-collapse${material}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`panelsStayOpen-heading${material}`">
          <div class="accordion-body">
            <figure>
              <img src="/src/assets/tuberias.webp" :alt="`${material}`" width="100">
            </figure>
            <table>
              <tr>
                <th>Medida</th>
                <th>Unidad</th>
              </tr>
              <tr>
                <td>Pequeño</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Mediano</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Grande</td>
                <td>7</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      const listaMateriales = ['Codos', 'Tee', 'Coplas', 'Terminales'];
      return {
        listaMateriales
      }
    },
  }
</script>

<style scoped>
figure {
    display: flex;
    flex-flow: column;
    padding: 15px;
    width: fit-content;
    margin: auto;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>