import Vue from 'vue'
import VueRouter from 'vue-router'
import GamesList from './containers/GamesListContainer.vue'
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
        await store.dispatch('loadVideoMap', +to.params.id)
        await store.dispatch('selectGame', +to.params.id)
        next()
      }
    }
  ]
})

export default router
