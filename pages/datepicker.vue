<template>
    <div style="padding:50px; position:relative;">
        <date-picker v-model="date" :config="options"
        style="width:200px;"/>
    </div>
</template>
<script>
export default {
        data() {
            return {
                date: new Date(),
                options: {
                    format: 'YYYY-MM-DD',
                    debug:true,
                }
            }

        },
    }
</script>

