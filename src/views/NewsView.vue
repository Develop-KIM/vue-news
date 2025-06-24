<template>
  <div>
    <div v-for="(user, id) in users" :key="id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchNewsList()
      .then(response => this.users = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>
