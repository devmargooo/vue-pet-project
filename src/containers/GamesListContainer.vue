<template>
<GamesList :list="games"/>
</template>

<script>
import { mapState } from 'vuex';
import GamesList from '../components/GamesList.vue';
export default {
    components: {
        GamesList
    },
    computed: {
        ...mapState(['games'])
    },
}
</script>