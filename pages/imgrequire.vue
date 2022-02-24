<template>
    <div style="padding:50px; position:relative;">
        <img :src='`https://image.flaticon.com/icons/png/512/4825/${imgName}.png`'
             @click="changeImg"/>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgName: '4825430'
            }
        },
        methods: {
            changeImg(){
                if(this.imgName === '4825430') {
                    this.imgName = '4825330';
                }else {
                    this.imgName = '4825430';
                }
            }
        }
    }
</script>

