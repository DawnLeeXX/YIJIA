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
      components: {
        default: () => import('../view/Home.vue'),
        footer: () => import('../view/common/Tabbar.vue')
      }
    },
    {
      path: '/classify',
      name: 'classify',
      components: {
        default: () => import('../view/Classify.vue'),
        footer: () => import('../view/common/Tabbar.vue')
      }
    },
    {
      path: '/shopping_trolley',
      name: 'shopping_trolley',
      components: {
        default: () => import('../view/ShoppingTrolley.vue'),
        footer: () => import('../view/common/Tabbar.vue')
      }
    },
    {
      path: '/member',
      name: 'member',
      components: {
        default: () => import('../view/Member.vue'),
        footer: () => import('../view/common/Tabbar.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../view/Register.vue')
    }
  ]
})
