<template>
  <div>
    <Navbar1 />
    <Navbar2 />
    <Nuxt />
  </div>
</template>

<script>
import '../assets/css/style.css'

export default {
  // name: "Default",
  // components: {
  //   Navbar1,
  //   Navbar2,
  // },

  // state: {
  //   // count: 0,

  //   dateOfEnter: '111',
  //   shortUrl: 'asdasd',
  // },
  mounted() {
    this.$store.dispatch('startTimer')
    // this.dateOfEnter = new Date().getTime()
    // this.$store.commit('setDateOfEnter')
    // this.$store.commit('setTime')
  },
}
</script>
