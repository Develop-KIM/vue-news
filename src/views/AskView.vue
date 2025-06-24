<template>
  <div>
    <div v-for="(ask, id) in asks" :key="id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      asks: [],
    }
  },
  created() {
    fetchAskList()
      .then(response => this.asks = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>
