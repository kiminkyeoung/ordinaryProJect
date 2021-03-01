<template>
    <div class="wrapper">
        <a :class="state + ' button'" @click="submit">
            <div class="button-wrap">
                <div>SUBMIT</div>
                <div class="loading-div">
                    <span></span>LOADING
                </div>
                <div class="success-div">
                    <svg height="24" viewBox="0 0 24 24" width="24">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                    SUCCESS
                </div>
            </div>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                state: 'submit',
            }
        },
        methods: {
            submit() {
                this.state = "loading";
                setTimeout(() => {
                    this.state = "success";
                    console.log("bbb")
                }, 3000);
            }
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

    .wrapper {
        padding: 50px;
        text-align: center;
    }

    a.button {
        display: block;
        position: relative;
        width: 200px;
        height: 50px;
        margin: 0 auto;
        font-family: 'Staatliches', cursive;
        font-size: 26px;
        border-radius: 10px;
        color: #fff;
        background: #00A178;
        font-weight: 400;
        letter-spacing: 1px;
        overflow: hidden;
        cursor: pointer;
        transition:all ease-in .5s;
    }

    .button-wrap {
        transition:all ease-in-out .2s;
    }
    .loading .button-wrap {
        transform: translateY(-50px);
    }
    .loading.button {
        background:#22A6C0;
    }
    .success .button-wrap {
        transform: translateY(-100px);
    }

    .success.button {
        background:#4CC290;
    }
    div.button-wrap div {
        height: 50px;
        line-height: 50px;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading-div span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #CCDACD;
        border-top: 3px solid #2C656B;
        margin: 0 10px 0 0;
        animation: loading 1s ease-in-out infinite;
    }

    @keyframes success {
        0% {
            stroke-dashoffset: -50px;
        }
        70% {
            stroke-dashoffset: 0;
            transform: scale(1);
        }
        80% {
            transform: scale(1.3);
        }
        95% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
    }

    .success svg {
        fill: transparent;
        stroke: #2C656B;
        stroke-width: 3px;
        stroke-dasharray: 50px;
        margin: -5px 2px 0 0;
    }
    .success .success-div svg {
        animation: success 2s ease-in-out;
    }
</style>

