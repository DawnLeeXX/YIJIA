import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../view/Register.vue')
    }
  ]
})
