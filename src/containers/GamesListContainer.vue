<template>
<GamesList :list="games"/>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GamesList from '../components/GamesList.vue';
export default {
    components: {
        GamesList
    },
    computed: {
        ...mapState(['games'])
    },
    methods: {
        ...mapActions(['loadGames'])
    },
    mounted() {
        this.loadGames();
    }
}
</script>