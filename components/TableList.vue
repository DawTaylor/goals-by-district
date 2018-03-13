<template lang="pug">
  div.grid
    card(v-for='(item, index) in data', :key='index')
      nuxt-link(:to='linkPrefix + item.id', v-for='(field, index) in fields', :key='index') {{ item[field] }}
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'TableList',
  components: {
    Card
  },
  props: {
    data: {
      required: true,
      type: Array
    },
    fields: {
      required: true,
      type: Array
    },
    linkPrefix: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="stylus">
.grid
  padding-top 20px
  display grid
  grid-gap 20px
  grid-template-columns auto

  @media screen and (min-width 768px)
    grid-template-columns repeat(3, 236.66px)
  
  @media screen and (min-width 1024px)
    grid-template-columns repeat(4, 232.5px)
  
  @media screen and (min-width 1280px)
    grid-template-columns repeat(5, 226px)
</style>
