<template>
<Game :map="map"/>
</template>

<script>
import { mapState } from 'vuex';
import Game from '../components/Game.vue';
export default {
    components: {
        Game
    },
    computed: {
        ...mapState(['selectedGame']),
        /** 
         * Возвращает список видео по месяцам
         */
        map() {
            return this.selectedGame && this.selectedGame.map
                ? this.selectedGame.map
                : []
        }
    },
}
</script>