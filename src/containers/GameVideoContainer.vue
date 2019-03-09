<template>
    <GameVideo 
        :video="video"
        :favorites="favorites"
        @add="push"
        @remove="remove"/>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import formatNumber from '../helpers/formatNumber'
import api from '../api.json';
import GameVideo from '../components/GameVideo.vue';
export default {
    components: {
        GameVideo
    },
    computed: {
        ...mapState(['selectedGame', 'selectedMonth']),
        ...mapState('Favorites', ['favorites']),
        video() {
            return this.selectedGame.map[`${this.selectedMonth}`] 
                ? this.buildUrls()
                : []
        }
    },
    methods: {
        ...mapMutations('Favorites', ['push', 'remove']),
        /**
         * Собирает ссылки для видео и складывает их в массив
         */
        buildUrls() {
            const videoIndexes = this.selectedGame.map[`${this.selectedMonth}`];
            const urls = [];
            for (let i = 0; i < videoIndexes.length; i++) {
                urls.push(`${api.game}${this.selectedGame.game_id}/${formatNumber(this.selectedMonth)}/${formatNumber(videoIndexes[i])}.mp4`)
            }
            return urls;
        },
    }
 }
</script>