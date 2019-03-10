<template>
<div class="favorites-wrapper">
    <h2> Favorites </h2>
    <ul class="favorites">
        <li class="favorites__item" v-for="item in favorites">
            <video class="video" controls>
                <source :src="item" type="video/mp4">
            </video>
            <RemoveIcon
                class="icon"
                @remove="$emit('remove', item)"/>
        </li>
    </ul>
</div>
</template>

<script>
import RemoveIcon from './RemoveIcon.vue'
export default {
    components: {
        RemoveIcon
    },
    props: {
        /** 
         * Список избранного 
         * @type {string[]}
         */
        favorites: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
h2 {
    font-family: Helvetica, sans-serif;
    color: white;
    text-align: center;
}
.favorites-wrapper {
    background: black;
    padding: 10px;
}
.favorites {
    overflow-y: auto;
    favorites-style-type: none;
    padding: 0;
}
.favorites__item {
    display: block;
    position: relative;
    overflow-x: hidden;
}
.video {
    width: 375px;
    height: 220px;
    margin: 10px auto;
    display: block;
}
.icon {
    position: absolute;
    left: 20px;
    top: 20px;
}
</style>