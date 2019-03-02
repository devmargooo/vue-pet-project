<template functional>
<div class="loader-wrapper">
    <div class="loader"></div>
    <div class="message">Мы загружаем список видео.<br/> Пожалуйста, дайте нам несколько секунд...</div>
    <img class="pic" src="../assets/loading.gif"/>
</div>
</template>

<style scoped>
.loader-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
}
.loader {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5)
}
.message {
    width: 400px;
    position: absolute;
    left: calc(50% - 200px);
    top: 150px;
    background: white;
    font-size: 18px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    line-height: 1.5;
}
.pic {
    width: 100px;
    display: block;
    position: absolute;
    left: calc(50% - 50px);
    top: 210px;
}
</style>