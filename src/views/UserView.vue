<template>
  <div>
    <p>name : {{ userinfo.id }}</p>
    <p>karma : {{ userinfo.karma }}</p>
    <p>created : {{ userinfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userinfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style scoped>

</style>
