import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from './api.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * Список игр
     * @type {Array}
     */
    games: [],
    /**
     * Id текущей игры
     * @type {Array}
     */
    game: ''
  },
  mutations: {
    /**
     * @param {Context} state
     * @param {Array} values
     */
    games (state, values) {
      state.games = values
    },
    /**
     * @param {Context} state
     * @param {string} id
     */
    game (state, id) {
      state.games = id
    }
  },
  actions: {
    /**
     * Загружает список игр
     * @param {Context} state
     */
    loadGames ({ commit }) {
      axios.get(api.games)
        .then(response => commit('games', response.data))
        .catch(() => console.log(':('))
    },
    selectGame ({ commit }) {

    },
    setGameVideMap (map) {
      console.log('!!!', map)
    }
  }
})
