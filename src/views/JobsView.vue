<template>
  <div>
    <div v-for="(job, id) in jobs" :key="id">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: [],
    }
  },
  created() {
    fetchJobsList()
      .then(response => this.jobs = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>
