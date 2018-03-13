<template>
  <div>
    <top-header />
    <nuxt/>
    <bottom-footer />
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader'
import BottomFooter from '~/components/BottomFooter'

export default {
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>

<style lang="stylus">
.container
  background #fff
  padding 20px 15px
  margin-top 20px
  display flex
  flex-direction column
  @media screen and (min-width 768px) 
    width 720px
  @media screen and (min-width 1024px)
    width 960px
  @media screen and (min-width 1280px)
    width 1180px
  box-shadow 0px 0px 76px -27px rgba(0,0,0,0.75)

  .row
    display flex
</style>

