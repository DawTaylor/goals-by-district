<template lang="pug">
  div
    section.container 
      h1 District Goals
    table-list(:data='districtGoals', :fields='["name"]', :linkPrefix='linkPrefix')
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TableList from '~/components/TableList'

export default {
  name: 'DistrictDetails',
  components: {
    TableList
  },
  head() {
    return {
      title: `Eokoe - Goals list`
    }
  },
  computed: {
    ...mapState([
      'goals'
    ]),
    linkPrefix() {
      return `${this.$route.fullPath}/`
    },
    districtGoals() {
      return this.goals[this.$route.params.district] || []
    }
  },
  methods: {
    ...mapActions([
      'fetchGoals',
      'toggleLoading'
    ])
  },
  async mounted() {
    this.toggleLoading()
    await this.fetchGoals(this.$route.params.district)
    this.toggleLoading()
  }
}
</script>

