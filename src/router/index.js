import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";

import DashboardGrid from "../views/DashboardGrid.vue";
import ShowClientes from "../views/cliente/ShowClientes.vue";
import CreateCliente from "../views/cliente/CreateCliente.vue";


const routes = [
  { path: "/", component: DashboardGrid },
  { path: "/about", component: About },

  { path: "/dashboard",  name: "dashboard", component: () => import("../views/DashboardGrid.vue")},
  { path: "/cliente", name: "cliente", component: ShowClientes },
  { path: "/cliente/nuevo", name: "create-cliente", component: CreateCliente },

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