<template>
  <div>
    <div v-for="(ask, id) in askList" :key="id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askList: 'asks'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>

</style>
