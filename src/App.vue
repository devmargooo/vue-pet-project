<template>
  <router-view></router-view>
</template>

<script>
import GamesList from './containers/GamesListContainer.vue';
export default {
  name: 'app',
  components: {
    GamesList
  }
}
</script>

<style>

</style>
