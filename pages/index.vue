<template lang="pug">
  .container
    input(type='text' v-model='term' placeholder='Filter districts')
    table-list(:data='visibleDistricts', :fields='["name"]', :linkPrefix='linkPrefix')
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TableList from '~/components/TableList'

export default {
  components: {
    TableList
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

<style>
</style>
