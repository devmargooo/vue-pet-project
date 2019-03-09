<template>
    <Favorites :favorites="favorites"/>
</template>

<script>
import { mapState } from 'vuex';
import Favorites from '../components/Favorites.vue'
export default {
  components: {
      Favorites
  }, 
  computed: {
      ...mapState('Favorites', ['favorites'])
  }
}
</script>