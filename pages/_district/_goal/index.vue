<template lang="pug">
  section.container
    h1 Goal details
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GoalDetails',
  computed: {
    ...mapState([
      'goal'
    ])
  },
  methods: {
    ...mapActions([
      'fetchGoal'
    ])
  },
  mounted() {
    this.fetchGoal(this.$route.params.goal)
  }
}
</script>
