import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '../stores/UserStore'

import login from "../views/login.vue";
import home from "../views/home.vue";
import mypokemons from "../views/mypokemons.vue";
import pokemon from "../views/pokemon.vue";
import error from "../views/error.vue";





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
      meta: {requiresAuth: true}
    },

    {
      path: "/mypokemons",
      name: "mypokemons-view",
      component: mypokemons,
      meta: {requiresAuth: true}
    },

    {
      path: "/pokemon/:id",
      name: "pokemon-view",
      component: pokemon,
      props: true,
      meta: {requiresAuth: true}
    },

    {
      path: "/:pathMatch(.*)*",
      name: "error-view",
      component: error,
      
    },
  ],
});

router.beforeEach((to, from, next) => {
  
  const user = useUserStore()  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user.hasLogin) {      
      next({name:'login-view'})
    } else {
      next()
    }        
  } else {    
    if (user.hasLogin) {    
      next({name:'home-view'})
    } else {
      next()
    }    
  }
})

export default router;
