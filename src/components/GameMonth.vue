<template>
    <carousel class="carousel">
        <slide v-for="item in video">
            <video class="video" controls>
                <source :src="item" type="video/mp4">
            </video>
        </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
    },
    props: {
        video: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log('VIDEO!!! ', this.video)
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
</style>