<template>
    <div>
        <p>현재시간 : {{today}}</p>
        <p>어제:  {{yesterday}}</p>
        <p>내일 : {{tommorrow}}</p>
    </div>
</template>
<script>
    import dayjs from 'dayjs'

    export default {
        component: {
            dayjs
        },
        data() {
            return {
                today: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                yesterday:'',
                tommorrow:'',
            }
        },
        mounted() {
            this.calcDate();
        },
        methods: {
            calcDate: function() {
                this.tommorrow = dayjs(this.today).add(1, 'day').format('YYYY-MM-DD');
                this.yesterday = dayjs(this.today).subtract(1, 'day').format('YYYY-MM-DD');
            }
        }
    }
</script>

