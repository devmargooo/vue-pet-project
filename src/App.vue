<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';
import GamesList from './containers/GamesListContainer.vue';
export default {
  name: 'app',
  components: {
    GamesList
  },
  methods: {
    ...mapActions(['loadGames'])
  },
  mounted() {
      this.loadGames();
  }
}
</script>

<style>

</style>
