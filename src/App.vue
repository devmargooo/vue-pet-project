<template>
<div>
    <Loader v-if="isLoaderShown"/>
    <router-view></router-view>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Loader from './components/Loader.vue';
export default {
  name: 'app',
  components: {
    Loader
  },
  computed: {
    ...mapState(['isLoaderShown'])
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
