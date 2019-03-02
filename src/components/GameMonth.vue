<template>
    <div>{{video}}
    </div>
</template>

<script>
export default {
    props: {
        video: {
            type: Array,
            default: () => []
        }
    },
    created() {
        console.log('GAMES! ', this.video)
    }
}
</script>