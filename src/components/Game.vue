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

import formatNumber from '../helpers/formatNumber';
import monthMap from '../helpers/monthMap';
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
            formatNumber,
            monthMap
        }
    }, 
}
</script>