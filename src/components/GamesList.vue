<template>
<div>
    <ul v-if="list.length">
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
    <EmptyData v-else text="We could not find games :( Please try later"/>
</div>
</template>

<script>

/**
 * Компонент отображает список игр
 * 
 * @typedef {{game_id: number, game_name: string, disabled: boolean|undefined}} Game
 */

import EmptyData from './EmptyData.vue';

export default {
    components: {
        EmptyData
    },
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