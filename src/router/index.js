import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/about", component: About },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;