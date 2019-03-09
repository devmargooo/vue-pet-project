<template>
    <div>
        <carousel v-if="video.length" class="carousel">
            <slide class="slide" v-for="item in video">
                <video class="video" controls>
                    <source :src="item" type="video/mp4">
                </video>
                <FavoritesIcon 
                    class="icon"
                    :isChecked="isFavorite(item)"
                    @add="$emit('add', item)"
                    @remove="$emit('remove', item)"/>
            </slide>
        </carousel>
        <EmptyData v-else text="We could not find video for this month :( Please return back"/>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import EmptyData from './EmptyData.vue';
import FavoritesIcon from './FavoritesIcon.vue';

export default {
    components: {
        Carousel,
        Slide,
        EmptyData,
        FavoritesIcon
    },
    props: {
        /** 
         * Массив ссылок на видео
         * @type {string[]}
         */
        video: {
            type: Array,
            default: () => []
        },
        favorites: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        isFavorite(item) {
            return this.favorites.includes(item)
        }
    }
}
</script>

<style scoped>
.carousel {
    width: 900px;
    margin: 150px auto 0;
}
.video {
    width: 400px;
    margin: 0 5px;
}
.slide {
    position: relative;
}
.icon {
    position: absolute;
    left: 15px;
    top: 10px;
}
.div {
    height: 250px;
    background: red;
}
</style>