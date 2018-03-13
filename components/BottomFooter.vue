<template lang="pug">
  footer.footer
    section.container
      p
        small ® Copyright Eokoe - {{ year }}
</template>

<script>
export default {
  name: 'BottomFooter',
  computed: {
    year() {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style lang="stylus">
.footer 
  background #fff

  .container
    display flex
    justify-content center

  p
    text-align center
</style>
