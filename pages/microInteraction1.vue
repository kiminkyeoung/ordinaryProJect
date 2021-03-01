<template>
    <div class="wrapper">
        <a :class="alarmEventClass" @click="alarmEvent">
            <img src="~assets/images/alarm.svg" />
            <span>1</span>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                alarmEventClass:'',
            }
        },
        methods: {
            alarmEvent() {
                console.log(this.alarmEventClass);
                if( this.alarmEventClass  === 'alarm-shake') {
                    this.alarmEventClass = '';
                } else {

                    this.alarmEventClass = 'alarm-shake';
                }

            }
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
    .wrapper {
        padding:50px;
        text-align:center;
    }
    @keyframes alarm-shake {
        20%,60% {
            transform: rotate(20deg);
        }

        40%,80% {
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    .alarm-shake {
        animation-name: alarm-shake;
        animation-duration: .5s;
        animation-iteration-count:2;
        animation-fill-mode: both;
    }
    a {
        display:block;
        position:relative;
        width:200px;
        height:200px;
        margin:0 auto;
    }
    a img {width:200px;}
    @keyframes number-alarm {
        0% {
            transform: scale(0);
        }

        50% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
    .alarm-shake span {
        animation-name: number-alarm;
        animation-duration: 1s;
        animation-delay: 1s;
        animation-fill-mode: both;
    }
    span {
        position:absolute;
        top:15px;
        right:15px;
        display:block;
        width:60px;
        height:60px;
        line-height:60px;
        background:#EE6B60;
        color:#fff;
        border-radius:50px;
        font-size:26px;
        font-weight:bold;
        text-align:center;
        font-family: 'Staatliches', cursive;
        transform: scale(0);
    }
</style>

