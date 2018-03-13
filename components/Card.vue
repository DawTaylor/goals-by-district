<template lang="pug">
  .card
    slot
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped lang="stylus">
.card
  background #fff
  padding 15px
  box-shadow 0px 0px 76px -27px rgba(0,0,0,0.75)
</style>
