<template>
    <img 
        v-if="isChecked" 
        class="icon" 
        @click="$emit('remove')"
        src="../assets/favorites_checked.png"/>
    <img 
        v-else
        class="icon"
        @click="$emit('add')"
        src="../assets/favorites.png"/>
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
}
</script>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
    padding: 5px;
    cursor: pointer;
}
</style>