<template>
<div class="favorites-wrapper">
    <h2> Favorites </h2>
    <ul class="favorites">
        <li class="favorites__item" v-for="item in favorites">
            <video class="video" controls>
                <source :src="item" type="video/mp4">
            </video>
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        props: {
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
}
.video {
    width: 400px;
    height: 250px;
    margin: 10px auto;
}
</style>