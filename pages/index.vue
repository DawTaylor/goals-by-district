<template lang="pug">
  div
    .container
      .row
        input.filter(type='text' v-model='term' placeholder='Filter districts')
    table-list(:data='visibleDistricts', :fields='["name"]', :linkPrefix='linkPrefix')
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TableList from '~/components/TableList'
import Card from '~/components/Card'

export default {
  components: {
    TableList,
    Card
  },
  data() {
    return {
      term: ''
    }
  },
  computed: {
    ...mapState([
      'districts'
    ]),
    visibleDistricts() {
      return ( this.term === '' ) ? this.districts : this.districts.filter(district => district.name.toLowerCase().includes(this.term.toLowerCase()))
    },
    linkPrefix() {
      return `${this.$route.fullPath}`
    }
  },
  methods: {
    ...mapActions([
      'fetchDistricts'
    ])
  },
  mounted() {
    this.fetchDistricts()
  }
}
</script>

<style lang="stylus">
.filter
  padding 10px
  border 1px solid #aaa
  border-radius 5px
  font-size 12pt
</style>
