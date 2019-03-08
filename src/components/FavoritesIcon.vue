<template>
    <img v-if="isChecked" class="icon" src="../assets/favorites_checked.png"/>
    <img v-else class="icon" src="../assets/favorites.png"/>
</template>

<script>
export default {
    props: {
        isChecked: {
            /** Является ли элемент выбранным */
            type: Boolean,
            default: false
        }
    },
    computed: {
        /** путь до картинки */
        imgSrc() {
            return this.isChecked
            ? '/img/favorites_checked.png'
            : './img/favorites.png'
        }
    },
}
</script>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
}
</style>