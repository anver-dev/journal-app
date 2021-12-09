<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDaybook" class="btn btn-success">Success</button>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
  </div>

</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    goToDaybook() {
      this.$router.push({name: 'no-entry'})
    }
  },
}
</script>
