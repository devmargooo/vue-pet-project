/**
 * @typedef {{title: string, path: string}} Breadcrumb
 */

import monthMap from '../helpers/monthMap'
import formatNumber from '../helpers/formatNumber'

export default {
  namespaced: true,
  state: {
    /**
     * Ссылка на текущую игру
     * @type {Breadcrumb}
     */
    game: {
      title: '',
      path: ''
    },
    /**
     * Ссылка на текущий месяц
     * @type {Breadcrumb}
     */
    month: {
      title: '',
      path: ''
    }
  },
  mutations: {
    /**
     * Устанавливает "хлебные крошки"
     * @param {Context} state
     * @param {Breadcrumb} game
     * @param {Breadcrumb} month
     */
    setBreadcrumbs (state, { game, month } = {}) {
      state.game = game
      state.month = month
    }
  },
  actions: {
    setBreadcrumbs ({ commit, rootState }, { gameId, monthId } = {}) {
      const empty = {
        title: '',
        path: ''
      }
      if (!gameId) {
        commit('setBreadcrumbs', { game: empty, month: empty })
        return
      }
      const gameName = rootState.games.find(item => item.game_id === gameId).game_name
      const gamePath = `/game/${gameId}`

      if (!monthId) {
        commit('setBreadcrumbs', {
          game: {
            title: gameName,
            path: gamePath
          },
          month: empty
        })
        return
      }
      const monthName = monthMap[monthId]
      const monthPath = `/game/${gameId}/${formatNumber(monthId)}`
      commit('setBreadcrumbs', {
        game: {
          title: gameName,
          path: gamePath
        },
        month: {
          title: monthName,
          path: monthPath
        }
      })
    }
  }
}
