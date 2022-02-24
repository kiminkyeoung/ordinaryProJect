<template>
    <div :class="[thema === 'light'? 'light body': 'dark body']">
        <button class="thema-button" @click="changeThema">Axios</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                thema: "dark"
            }
        },
        methods: {
            changeThema() {
                if (this.thema === 'light') {
                    this.thema = 'dark'
                } else {
                    this.thema = 'light'
                }
            }
        }
    }
</script>
<style>
    .body {
        width:100%;
        height:100vh;
        padding:30px;
    }
    .thema-button {
        width:100px;
        height:30px;
        font-size:14px;
        background:#ddd;
        border:0;
        box-shadow: 1px 2px 15px rgba(0,0,0,0.1);
    }
    .thema-button:focus {
        border:0;
        outline:0;
    }
    .dark {
        background:#444;
    }
    .dark .thema-button {
        background:#666;
        color:#fff;
    }
    .light {
        background:#fff;
    }
</style>

