<template>
    <GameMonth :video="video"/>
</template>

<script>
import { mapState } from 'vuex';
import GameMonth from '../components/GameMonth.vue';
export default {
    components: {
        GameMonth
    },
    computed: {
        ...mapState(['selectedGame', 'selectedMonth']),
        video() {
            return this.selectedGame.map[`${this.selectedMonth}`] 
                ? this.selectedGame.map[`${this.selectedMonth}`] 
                : []
        }
    }
 }
</script>