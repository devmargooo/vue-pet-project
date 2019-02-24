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
    games: []
  },
  mutations: {
    /** 
     * @param {Context} state
     * @param {Array} values
     */
    games (state, values) {
      state.games = values
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
    }
  }
})
