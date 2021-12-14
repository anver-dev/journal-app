<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 10px;
  height: 60px;
  position: fixed;
  right: 10px;
  width: 60px;
}
</style>