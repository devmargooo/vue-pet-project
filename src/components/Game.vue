<template>
<ul>
    <li v-for="item in list"></li>
</ul>    
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>