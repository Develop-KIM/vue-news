<template>
  <div>
    <div v-for="(user, id) in this.$store.state.news" :key="id">{{ user.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>

</style>
