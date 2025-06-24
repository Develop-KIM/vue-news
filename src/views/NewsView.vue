<template>
  <div>
    <p v-for="(item, id) in newsList" :key="id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}{{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      newsList: 'news'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>

</style>
