<template>
    <GameVideo :video="video"/>
</template>

<script>
import { mapState } from 'vuex';
import formatNumber from '../helpers/formatNumber'
import api from '../api.json';
import GameVideo from '../components/GameVideo.vue';
export default {
    components: {
        GameVideo
    },
    computed: {
        ...mapState(['selectedGame', 'selectedMonth']),
        video() {
            return this.selectedGame.map[`${this.selectedMonth}`] 
                ? this.buildUrls()
                : []
        }
    },
    methods: {
        buildUrls() {
            const videoIndexes = this.selectedGame.map[`${this.selectedMonth}`];
            const urls = [];
            for (let i = 0; i < videoIndexes.length; i++) {
                urls.push(`${api.game}${this.selectedGame.game_id}/${formatNumber(this.selectedMonth)}/${formatNumber(videoIndexes[i])}.mp4`)
            }
            return urls;
        }
    }
 }
</script>