<template lang="pug">
  header.header
    section.container
      nuxt-link(:to='"/"')
        h1 Eokoe - Goals by District
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="stylus">
.header 
  background #fff

  .container
    display flex
    justify-content center
  h1
    font-size 26pt
</style>
