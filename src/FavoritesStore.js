export default {
  namespaced: true,
  state: {
    /**
     * Список избранного
     */
    favorites: []
  },
  mutations: {
    /**
     * Добавляет значение в избранное
     * @param {Context} state
     * @param {string} value
     */
    push (state, value) {
      state.favorites.push(value)
    },
    /**
     * Удаляет значение из избранного
     * @param {Context} state
     * @param {string} value
     */
    remove (state, value) {
      state.favorites = state.favorites.filter(item => item !== value)
    }
  }
}
