<template>
<ul>
    <li class="item" v-for="item in list">
        <router-link :to="`/${formatNumber(item)}`">
            {{monthMap[item]}}
        </router-link>
    </li>
    
</ul>    
</template>

<script>
import formatNumber from '../helpers/formatNumber'
export default {
    props: {
        map: {
            type: Object,
            required: true
        }
    },
    computed: {
        list() {
            return Object.keys(this.map)
                .filter(index => this.map[index].length)
        }
    },
    data() {
        return {
            formatNumber
        }
    }, 
    created() {
        this.monthMap = {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December'
        }
    }
}
</script>