<template lang="pug">
  div
    section.container
      h1 Goal details
    card.card
      h2 {{ goalDetails.name }}
      p {{ goalDetails.description }}
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Card from '~/components/Card'

export default {
  name: 'GoalDetails',
  components: {
    Card
  },
  computed: {
    ...mapState([
      'goalDetails'
    ])
  },
  methods: {
    ...mapActions([
      'fetchGoal',
      'toggleLoading'
    ])
  },
  async mounted() {
    this.toggleLoading()
    await this.fetchGoal(this.$route.params.goal)
    this.toggleLoading()
  }
}
</script>

<style lang="stylus" scoped>
.card
  margin-top 15px

  @media screen and (min-width 768px)
    width 720px
  @media screen and (min-width 1024px)
    width 960px
  @media screen and (min-width 1280px)
    width 1180px
</style>
