<template>
<ul>
    <li v-for="item in list">{{item.game_name}}</li>
</ul>
</template>

<script>
/**
 * @typedef {{game_id: number, game_name: string, disabled: boolean|undefined}} Game
 */
export default {
    props: {
        /** 
         * Список игр
         * @type {Game[]}
         */
        list: {
            type: Array,
            required: true
        }
    }
}
</script>
