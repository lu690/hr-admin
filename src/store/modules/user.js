import { login } from '@/api/user'
const state = {
  token: ''
}

const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}

const actions = {
  async login (context, data) {
    try {
      const res = await login(data)
      context.commit('setToken', res.data.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions
}

