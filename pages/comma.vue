<template>
    <div>
        {{price | numberFormat(2)}}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                price: 342345.10923
            }
        },
        filters: {
            numberFormat: (value, numFix) => {
                value = parseFloat(value);
                if (!value) return '0';
                return value.toFixed(numFix).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
            },
        },
    }
</script>
