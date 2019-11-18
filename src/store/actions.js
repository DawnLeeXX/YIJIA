import * as types from './mutations-types'
export const setTokenAction = ({commit, state}, res) => {
  commit(types.SET_TOKEN, res)
}
export const setloginForm = ({commit, state}, res) => {
  commit(types.SET_LOGINFORM, res)
}
