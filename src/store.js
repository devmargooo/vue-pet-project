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
     * Текущая игра
     * @type {Object}
     */
    selectedGame: {},
    /**
     * Признак отображения прелоадера
     * @type {boolean}
     */
    isLoaderShown: false
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
     * Устанвливает текущую игру
     * @param {Context} state
     * @param {string} gameId
     */
    selectGame (state, gameId) {
      console.log('GAMES IN MUTATIONS ', state.games)
      state.selectedGame = state.games.find(item => item.game_id === gameId)
    },
    /**
     * Устанавливает карту доступных для игры видео
     * @param {Context} state
     * @param {string} gameId
     */
    gameVideoMap (state, { gameId, map }) {
      const game = state.games.find(item => item.game_id === gameId)
      game.map = map
    },
    /**
     * Переключает состояние прелоадера
     * @param {Context} state
     */
    switchLoader (state) {
      state.isLoaderShown = !state.isLoaderShown
    }
  },
  actions: {
    /**
     * Загружает список игр
     * @param {Context} state
     */
    async loadGames ({ commit }) {
      await axios.get(api.games)
        .then(response => commit('games', response.data))
        .catch(() => console.log(':('))
    },
    selectGame ({ commit }, id) {
      commit('selectGame', id)
    },
    async loadVideoMap ({ commit }, id) {
      const monthMap = {}
      const MONTHS_COUNT = 12
      const MAX_VIDEO_PER_MONTH = 10
      for (let month = 1; month <= MONTHS_COUNT; month++) {
        const indexes = []
        for (let index = 1; index <= MAX_VIDEO_PER_MONTH; index++) {
          const url = `${api.game}${id}/${formatNumber(month)}/${formatNumber(index)}.mp4`
          await axios.head(url)
            .then(() => indexes.push(index))
            .catch(() => { /* do nothing */ })
        }
        monthMap[month] = indexes.sort((a, b) => a > b)
      }
      console.log(monthMap)
      commit('gameVideoMap', { gameId: id, map: monthMap })
    }
  }
})

function formatNumber (n) {
  return ('0' + n).slice(-2)
}
