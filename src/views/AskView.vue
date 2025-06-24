<template>
  <div>
    <p v-for="(item, id) in askList" :key="id">
      <a href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}{{ item.user }}</small>
    </p>
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
