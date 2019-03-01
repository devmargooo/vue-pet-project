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

<style scoped>
.item {
    display: block;
    border-left: 4px solid black;
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
    font-family: Helvetica, sans-serif;
    
}
.item:hover {
    border-left: 4px solid red;
    cursor: pointer;
}

.item a,
.item a:hover,
.item a:visited,
.item a:focus
{
    text-decoration: none;
    color: black;
}

</style>
