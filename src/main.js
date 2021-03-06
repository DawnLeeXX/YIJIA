// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './axios'
import './mintUI'
import App from './App'
import router from './router/index'
import store from './store'
import 'lib-flexible/flexible.js'
import './assets/css/globe.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
