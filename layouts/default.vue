<template lang="pug">
  div
    top-header
    nuxt
    .container(v-show='isLoading')
      .loader
        svg(width="200px", height="200px", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 100 100", preserveAspectRatio="xMidYMid", class="lds-ripple", style="background: none;")
          circle(cx="50", cy="50", r="11.221", fill="none", ng-attr-stroke="2", ng-attr-stroke-width="200", stroke="#000", stroke-width="3")
            animate( attributeName="r", calcMode="spline", values="0;20", keyTimes="0;1", dur="1.5", keySplines="0 0.2 0.8 1" begin="-0.75s", repeatCount="indefinite")
            animate( attributeName="opacity", calcMode="spline", values="1;0", keyTimes="0;1", dur="1.5", keySplines="0.2 0 0.8 1", begin="-0.75s", repeatCount="indefinite")
          circle( cx="50", cy="50", r="19.4171", fill="none", ng-attr-stroke="2", ng-attr-stroke-width="200", stroke="#333", stroke-width="3")
            animate( attributeName="r", calcMode="spline", values="0;20", keyTimes="0;1", dur="1.5", keySplines="0 0.2 0.8 1", begin="0s", repeatCount="indefinite")
            animate( attributeName="opacity", calcMode="spline", values="1;0", keyTimes="0;1" dur="1.5", keySplines="0.2 0 0.8 1", begin="0s", repeatCount="indefinite")
    bottom-footer
</template>

<script>
import { mapState } from 'vuex'

import TopHeader from '~/components/TopHeader'
import BottomFooter from '~/components/BottomFooter'

export default {
  components: {
    TopHeader,
    BottomFooter
  },
  computed: {
    ...mapState([
      'isLoading'
    ])
  },
  head () {
    return {
      title: 'Eokoe'
    }
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
  .loader
    display flex
    justify-content center
</style>

