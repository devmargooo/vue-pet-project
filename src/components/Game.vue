<template>
<div>
    <ul v-if="list.length">
        <li class="item" v-for="item in list">
            <router-link :to="{ path: `${formatNumber(item)}`}" append>
                {{monthMap[item]}}
            </router-link>
        </li>  
    </ul>
    <EmptyData v-else text="We could not find video for this game :( Please return back"/>
</div>   
</template>

<script>
/** 
 * Компонент, содержащий видео игры по месяцам  
 */

import formatNumber from '../helpers/formatNumber'
import EmptyData from './EmptyData.vue';

export default {
    components: {
        EmptyData
    },
    props: {
        /** 
         * Список видео 
         */
        map: {
            type: Object,
            required: true
        }
    },
    computed: {
        /** 
         * Фильтрует список видео, убирая пустые значения, и возвращает его в виде массива
         */
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