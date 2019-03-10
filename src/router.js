import Vue from 'vue'
import VueRouter from 'vue-router'
import isObjectEmpty from './helpers/isObjectEmpty'
import GamesList from './containers/GamesListContainer.vue'
import GameVideo from './containers/GameVideoContainer.vue'
import Game from './containers/GameContainer.vue'
import store from './Store/Store'
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
  setBreadcrumbs(to.path)
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

function setBreadcrumbs (url) {
  console.log('url! ', url)
  const arr = url.split('/')
  const gameId = arr.indexOf('game') + 1
  if (!gameId) { // в урле нет ид игры
    store.dispatch('Breadcrumbs/setBreadcrumbs')
    return
  }
  const monthId = gameId + 1 // месяц в урле следует за id игры
  console.log('arr[monthId]   ', arr[monthId])
  if (!arr[monthId]) {
    store.dispatch('Breadcrumbs/setBreadcrumbs', { gameId: +arr[gameId] })
    return
  }
  console.log('full: ', +arr[gameId], '      ', +arr[monthId])
  store.dispatch('Breadcrumbs/setBreadcrumbs', { gameId: +arr[gameId], monthId: +arr[monthId] })
}

export default router
