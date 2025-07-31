import { createRouter, createWebHistory } from 'vue-router'
import PageInicio from '../pages/PageInicio.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PageInicio
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register.vue') // 🔄 más seguro
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/soport',
    name: 'Soport',
    component:() => import('../pages/Soport.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component:()=> import('../pages/Information.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../pages/Carrito.vue'),
    meta: {
      auth : true,
    }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/carrito");
  } else if (
    to.matched.some((record) => record.meta.auth) &&
    !auth.currentUser
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router
