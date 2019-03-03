<template>
    <div>
        <carousel v-if="video.length" class="carousel">
            <slide v-for="item in video">
                <video class="video" controls>
                    <source :src="item" type="video/mp4">
                </video>
            </slide>
        </carousel>
        <EmptyData v-else text="We could not find video for this month :( Please return back"/>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import EmptyData from './EmptyData.vue';

export default {
    components: {
        Carousel,
        Slide,
        EmptyData
    },
    props: {
        /** 
         * Массив ссылок на видео
         * @type {string[]}
         */
        video: {
            type: Array,
            default: () => []
        }
    },
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
</style>