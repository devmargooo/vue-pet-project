<template>
<div>
    <p class="text"> {{ text }}</p>
    <img class="pic" src="../assets/sad.gif"/>
</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Something is wrong :( please return back'
        }
    }
}
</script>

<style scoped>
.text {
    max-width: 600px;
    font-size: 18px;
    font-family: Helvetica, sans-serif;
    margin: 100px auto 0;
    text-align: center;
}
.pic {
    display: block;
    margin: 0 auto;
    width: 200px;
}

</style>