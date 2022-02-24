<template>
  <div>
    <h1>동적라우터 Param : {{param}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return{
      param:'',
    }
  },
  mounted() {
    this.param = this.$route.params.id;
  }
}
</script>

