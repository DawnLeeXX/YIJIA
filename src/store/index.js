import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import member from './modules/member/index'
Vue.use(Vuex)
console.warn('loading in store/index.js')
export default new Vuex.Store({
  actions,
  getters,
  state,
  modules: {
    member
  },
  mutations,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [persistedState()]
})
