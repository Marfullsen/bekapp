<template>
  <div class="container">
    <div v-if="loading" class="d-flex justify-content-center spinner-grow" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div
      v-for="(informe, index) in this.informes" :key="informe"
      class="accordion" id="accordionPanelsStayOpen">
      <div class="accordion-item">
        <h2 class="accordion-header" :id="`panelsStayOpen-heading_${index}`">
          <button class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#panelsStayOpen-collapse_${index}`"
            aria-expanded="true"
            :aria-controls="`panelsStayOpen-collapse_${index}`">
            {{  informe.nombre }} | {{  informe.lugar }} | {{  informe.fecha }}
          </button>
        </h2>
        <div :id="`panelsStayOpen-collapse_${index}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`panelsStayOpen-heading_${index}`">
          <div class="accordion-body">
            <article class="d-flex">
              <figure>
                <img src="/src/assets/tuberias.webp" :alt="`${index}`" width="100">
                <figcaption class="p-3 text-center">Antes</figcaption>
              </figure>
              <figure>
                <img src="/src/assets/tuberias.webp" :alt="`${index}`" width="100">
                <figcaption class="p-3 text-center">Después</figcaption>
              </figure>
            </article>
            <table>
              <tr v-for="implemento in informe.implementos" :key="implemento">
                <th>{{ implemento.nombre }}</th>
                <th>{{ implemento.cantidad }}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loading && Object.keys(this.informes).length == 0" class="d-flex justify-content-center">
      <p>Sin informes disponibles</p>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      
      return {
        
      }
    },
    data() {
      return {
        informes: {},
        loading: true
      }
    },
    methods: {
      getInformes() {
        const server_url = import.meta.env.VITE_URL_DJANGO_SERVER;
        this.loading = true;
        fetch(`http://${server_url}/api/getInformes/`)
          .then(response => response.json())
          .then(data => {
            this.informes = data;
            console.log('YEP')
            this.loading = false;
          })
          .catch(error => {
            this.loading = false;
            /* console.log(error) */
            this.informes = {
              1 : {
                'nombre' : 'Cris',
                'lugar' : 'Boldos',
                'fecha' : '23 - Agosto - 2022',
                'foto_antes' : '/21894383.jpg',
                'foto_despues' : '/21894384.jpg',
                'implementos' : [
                  {
                    'nombre': 'codos',
                    'cantidad': '5'
                  },
                  {
                    'nombre': 'tee',
                    'cantidad': '4'
                  },
                  {
                    'nombre': 'terminal',
                    'cantidad': '10'
                  },
                ]
              },
              2 : {
                'nombre' : 'Juan',
                'lugar' : 'Quiyay',
                'fecha' : '26 - Junio - 2022',
                'foto_antes' : '/21894383.jpg',
                'foto_despues' : '/21894384.jpg',
                'implementos' : [
                  {
                    'nombre': 'codos',
                    'cantidad': '5'
                  },
                  {
                    'nombre': 'tee',
                    'cantidad': '4'
                  },
                  {
                    'nombre': 'terminal',
                    'cantidad': '10'
                  },
                ]
              },
              3 : {
                'nombre' : 'Pedro',
                'lugar' : 'Jumbo',
                'fecha' : '29 - enero - 2022',
                'foto_antes' : '/21894383.jpg',
                'foto_despues' : '/21894384.jpg',
                'implementos' : [
                  {
                    'nombre': 'codos',
                    'cantidad': '5'
                  },
                  {
                    'nombre': 'tee',
                    'cantidad': '4'
                  },
                  {
                    'nombre': 'terminal',
                    'cantidad': '10'
                  },
                ]
              },
            }
          })
      }
    },
    mounted() {
      this.getInformes()
    }
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