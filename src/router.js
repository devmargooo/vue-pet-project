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
        console.log('&&&', store.state.selectedGame)
        console.log('isObjEmpty: ', isObjectEmpty(store.state.selectedGame))
        if (isObjectEmpty(store.state.selectedGame)) {
          console.log('HERE!')
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
  console.log('games loaded')
  console.log(store.state.games)
  next()
})

async function setGameData (gameId) {
  await store.dispatch('selectGame', gameId)
  console.log('SELECTED GAME ', store.state.selectedGame)
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
