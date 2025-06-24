<template>
  <div>
    <div v-for="(job, id) in this.$store.state.jobs" :key="id">{{ job.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>
