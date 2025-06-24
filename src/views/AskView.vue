<template>
  <div>
    <div v-for="(ask, id) in askItems" :key="id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems: 'asks'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>

</style>
