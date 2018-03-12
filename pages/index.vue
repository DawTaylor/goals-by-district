<template>
  <section class="container">
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapState([
      'districts'
    ])
  }
}
</script>

<style>
</style>
