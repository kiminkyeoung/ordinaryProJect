<template>
    <div>
        <button @click="fullPageChange" v-if="fullPage === false">전체 화면 켜기</button>
        <button @click="fullPageChange" v-if="fullPage === true">전체 화면 끄기</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fullPage: false,
            }
        },
        methods: {
            fullPageChange: function () {
                const documentElement = document.documentElement;
                if (document.fullscreenElement === null) {
                    //전체화면 아닌 상태
                    documentElement.requestFullscreen();
                    this.fullPage = true;
                } else {
                    //전체화면 상태
                    document.exitFullscreen();
                    this.fullPage = false;
                }
            }
        }
    }
</script>
<style>
    div {
        padding: 20px;
    }
</style>

