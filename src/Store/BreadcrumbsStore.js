export default {
  namespaced: true,
  state: {
    /**
     * "Хлебные крошки"
     * @type {string[]}
     */
    path: []
  },
  mutations: {
    /**
     * "Хлебные крошки"
     * @param {Context} state
     * @param {string[]} value
     */
    setPath (state, value) {
      state.path = value
    }
  }
}
