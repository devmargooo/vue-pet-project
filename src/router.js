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
        store.commit('switchLoader')
        await store.dispatch('loadVideoMap', +to.params.id)
        await store.dispatch('selectGame', +to.params.id)
        store.commit('switchLoader')
        next()
      }
    },
    {
      path: '/game/:id/:month',
      component: GameMonth
    }
  ]
})

export default router
