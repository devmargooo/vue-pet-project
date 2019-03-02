<template>
<ul>
    <li 
        class="item"
        v-for="item in list"
        :key="item.id"
        v-if="!item.disabled">
        <router-link :to="`/game/${item.game_id}`">
            {{item.game_name}}
        </router-link>
    </li>
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
    },
}
</script>