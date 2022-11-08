import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";

import DashboardGrid from "../views/DashboardGrid.vue";

import ShowClientes from "../views/cliente/ShowClientes.vue";
import CreateCliente from "../views/cliente/CreateCliente.vue";

import MenuStock from "../views/stock/MenuStock.vue";
import StockRiego from "../views/stock/StockRiego.vue";
import StockConsumibles from "../views/stock/StockConsumibles.vue";
import StockHerramientas from "../views/stock/StockHerramientas.vue";
import StockUniformes from "../views/stock/StockUniformes.vue";
import RiegoMaterial from "../views/stock/RiegoMaterial.vue";

import seeInformes from "../views/informes/seeInformes.vue";

const routes = [
  // Rutas de la página.
  // { path: "/", name: "", component:  },

  { path: "/", component: DashboardGrid },

  { path: "/dashboard",  name: "dashboard", component: () => import("../views/DashboardGrid.vue")},

  // Cliente.
  { path: "/cliente", name: "cliente", component: ShowClientes },
  { path: "/cliente/nuevo", name: "create-cliente", component: CreateCliente },

  // Stock.
  { path: "/stock", name: "stock", component: MenuStock },
  { path: "/stock/riego", name: "stock_riego", component: StockRiego },
  { path: "/stock/riego/:lugarCamioneta/", name: "riego_material", component: RiegoMaterial },
  { path: "/stock/consumibles", name: "stock_consumibles", component: StockConsumibles },
  { path: "/stock/herramientas", name: "stock_herramientas", component: StockHerramientas },
  { path: "/stock/uniformes", name: "stock_uniformes", component: StockUniformes },

  // Informes.
  { path: "/informes", name: "informes", component: seeInformes },


  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
];

const history = createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
  history,
  routes,
});

export default router;