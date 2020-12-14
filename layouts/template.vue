<template>
<div>
  <Header />
  	<div id="wrap">
      <Nav />
      <nuxt/> 
      <Footer />
    </div>
</div>
</template>
<script>
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>
<style scoped>
#wrap {position:relative;}
</style>

