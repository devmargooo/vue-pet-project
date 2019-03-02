<template>
<Game :map="selectedGame.map"/>
</template>

<script>
import { mapState } from 'vuex';
import Game from '../components/Game.vue';
export default {
    components: {
        Game
    },
    computed: {
        ...mapState(['selectedGame'])
    },
}
</script>