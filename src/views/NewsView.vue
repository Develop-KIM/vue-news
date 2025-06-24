<template>
  <div>
    <div v-for="(user, id) in newsList" :key="id">{{ user.title }}</div>
    <p></p>
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
