<template>
    <div :class="[dark ? 'wrapper dark': 'wrapper light']"><!--
        <label class="switch-button">
            <input type="checkbox"/>
            <span class="onoff-switch"></span>
        </label>-->
        <label class="dark-mode-button">
            <input type="checkbox"/>
            <span class="onoff-switch"></span>
        </label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dark: 'false',
            }
        },
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

    .wrapper {
        padding: 50px;
    }

    .dark {
        background: #444;
    }

    .switch-button {
        position: relative;
        display: block;
        width: 55px;
        height: 30px;
    }

    .switch-button input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch-button .onoff-switch {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;
        background-color: #ccc;
        box-shadow: inset 1px 5px 1px #999;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .switch-button .onoff-switch:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: #fff;
        -webkit-transition: .5s;
        transition: .4s;
        border-radius: 20px;
    }

    .switch-button input:checked + .switch-button .onoff-switch {
        background-color: #F2D522;
        box-shadow: inset 1px 5px 1px #E3AE56;
    }

    .switch-button input:checked + .switch-button .onoff-switch:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /*darkMode*/
    .dark-mode-button {
        position: relative;
        display: block;
        width: 45px;
        height: 30px;
    }

    .dark-mode-button input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .dark-mode-button .onoff-switch {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 12px;
        background-color: #fff;
        box-shadow: 1px 1px 3px #eaeaea, -1px -1px 3px #eaeaea;
        border-radius: 20px;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .dark-mode-button .onoff-switch:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        top: -5px;
        background-image: url("~assets/images/sun.png");
        background-size: 15px;
        background-position: center;
        background-color: #fff;
        background-repeat: no-repeat;
        -webkit-transition: .5s;
        transition: .4s;
        border-radius: 20px;
        box-shadow: 1px 1px 3px #eaeaea;

    }

    .dark-mode-button input:checked + .onoff-switch {
        background-color: #444;
        box-shadow: inset 1px 1px 2px #222;
    }

    .dark-mode-button input:checked + .onoff-switch:before {
        background-image: url("~assets/images/moon.png");
        background-color: #333;
        box-shadow: none;
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
    }

</style>

