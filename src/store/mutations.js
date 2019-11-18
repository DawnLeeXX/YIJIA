import * as types from './mutations-types'
const mutations = {
  [types.SET_TOKEN] (state, data) {
    state.token = data
  },
  [types.SET_LOGINFORM] (state, data) {
    state.loginForm = data
  }
}

export default mutations
