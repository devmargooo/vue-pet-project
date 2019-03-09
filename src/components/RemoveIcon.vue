<template>
    <img  
        class="icon" 
        @click="$emit('remove')"
        src="../assets/remove.png"/>
</template>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
    padding: 5px;
    cursor: pointer;
}
</style>