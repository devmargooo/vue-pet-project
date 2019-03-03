import Vue from 'vue'
import VueRouter from 'vue-router'
import isObjectEmpty from './helpers/isObjectEmpty'
import GamesList from './containers/GamesListContainer.vue'
import GameVideo from './containers/GameVideoContainer.vue'
import Game from './containers/GameContainer.vue'
import store from './store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: GamesList },
    {
      path: '/game/:id',
      component: Game,
      beforeEnter: async (to, from, next) => {
        await setGameData(+to.params.id)
        next()
      }
    },
    {
      path: '/game/:id/:month',
      component: GameVideo,
      beforeEnter: async (to, from, next) => {
        if (isObjectEmpty(store.state.selectedGame)) {
          await setGameData(+to.params.id)
        }
        await store.commit('selectMonth', +to.params.month)
        next()
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.games.length) {
    await store.dispatch('loadGames')
  }
  next()
})

async function setGameData (gameId) {
  store.commit('selectGame', gameId)
  if (!store.state.selectedGame) {
    return
  }
  if (!store.state.selectedGame.map) {
    store.commit('switchLoader')
    await store.dispatch('loadVideoMap', gameId)
    store.commit('switchLoader')
  }
}

export default router
