import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import DashboardGrid from "../views/DashboardGrid.vue";

const routes = [
  { path: "/", component: DashboardGrid },
  { path: "/about", component: About },
  { path: "/dashboard",  name: "dashboard", component: () => import("../views/DashboardGrid.vue")},
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;