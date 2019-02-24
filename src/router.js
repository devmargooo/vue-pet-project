import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import api from './api.json'
import GamesList from './containers/GamesListContainer.vue'
import Game from './containers/GameContainer.vue'
import store from './store'
Vue.use(VueRouter)

const MONTHS_COUNT = 12
const MAX_VIDEO_PER_MONTH = 10

const router = new VueRouter({
  routes: [
    { path: '/', component: GamesList },
    {
      path: '/game/:id',
      component: Game,
      beforeEnter: (to, from, next) => {
        // console.log(to.params.id)
        const monthMap = {}
        for (let month = 1; month <= MONTHS_COUNT; month++) {
          const indexes = []
          for (let index = 1; index <= MAX_VIDEO_PER_MONTH; index++) {
            const url = `${api.game}${to.params.id}/${formatNumber(month)}/${formatNumber(index)}.mp4`
            console.log(url)
            axios.head(url)
              .then(() => indexes.push(index))
              .catch(() => { /* do nothing */ })
          }
          monthMap[month] = indexes.sort((a, b) => a > b)
        }
        console.log(monthMap)
        store.dispatch('setGameVideMap', monthMap)
        next()
      }
    }
  ]
})

function formatNumber (n) {
  return ('0' + n).slice(-2)
}

export default router
