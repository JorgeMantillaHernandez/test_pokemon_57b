import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
import home from "../views/home.vue";
import pokemon from "../views/pokemon.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login-view",
      component: login,
    },
    {
      path: "/home",
      name: "home-view",
      component: home,
    },
    {
      path: "/pokemon/:id",
      name: "pokemon-view",
      component: pokemon,
      props: true,
    },
  ],
});

export default router;
