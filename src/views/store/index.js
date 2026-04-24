import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    doublecount(state) {
      return state.count * 2
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
