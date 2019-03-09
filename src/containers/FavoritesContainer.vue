<template>
    <Favorites 
        :favorites="favorites"
        @remove="remove"/>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Favorites from '../components/Favorites.vue'
export default {
  components: {
      Favorites
  }, 
  computed: {
      ...mapState('Favorites', ['favorites'])
  },
  methods: {
      ...mapMutations('Favorites', ['remove']),
  }
}
</script>