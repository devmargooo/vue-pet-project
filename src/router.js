import Vue from 'vue'
import VueRouter from 'vue-router'
import GamesList from './containers/GamesListContainer.vue'
import GameMonth from './containers/GameMonthContainer.vue'
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
        await store.dispatch('selectGame', +to.params.id)
        console.log('SELECTED GAME ', store.state.selectedGame)
        if (!store.state.selectedGame.map) {
          store.commit('switchLoader')
          await store.dispatch('loadVideoMap', +to.params.id)
          store.commit('switchLoader')
        }
        next()
      }
    },
    {
      path: '/game/:id/:month',
      component: GameMonth
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

export default router
