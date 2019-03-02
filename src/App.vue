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
.item {
    display: block;
    border-left: 4px solid black;
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
    font-family: Helvetica, sans-serif;
    text-decoration: none;
    color: black;
    
}
.item:hover {
    border-left: 4px solid red;
    cursor: pointer;
}

.item a,
.item a:hover,
.item a:visited,
.item a:focus
{
    text-decoration: none;
    color: black;
}
</style>
