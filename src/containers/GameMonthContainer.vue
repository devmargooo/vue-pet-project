<template>
    <GameMonth/>
</template>

<script>
import {mapState} from 'vuex';
import GameMonth from '../components/GameMonth.vue';
export default {
    components: {
        GameMonth
    },
    computed: {
        ...mapState(['selectedGame'])
    },
    mounted() {
        console.log('!*!', this.selectedGame)
    }
 }
</script>