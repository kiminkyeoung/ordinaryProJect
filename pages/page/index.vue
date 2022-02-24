<template>
  <div>
    <h1>Query 파라미터 값은? : {{query}}</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        query:'',
      }
    },
    mounted() {
      this.query = this.$route.query.id;
    }
  }
</script>

