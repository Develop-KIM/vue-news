<template>
  <div>
    <div v-for="(job, id) in jobList" :key="id">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      jobList: 'jobs'
    })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

</style>
