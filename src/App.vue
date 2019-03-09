<template>
<div>
    <Loader v-if="isLoaderShown"/>
    <div class="app">
        <router-view class="app__content"></router-view>
        <Favorites class="app__favorites"/>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Loader from './components/Loader.vue';
import Favorites from './containers/FavoritesContainer.vue';

export default {
  name: 'app',
  components: {
    Loader,
    Favorites
  },
  computed: {
    ...mapState(['isLoaderShown'])
  },
}
</script>

<style>
.app {
    display: flex;
    justify-content: space-between;
    height: 100vh;
}
.app__favorites {
    width: 400px;
    overflow-y: auto;
    margin-right: 10px;
}
/* Общие стили приложения */
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
