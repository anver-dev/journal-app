<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="from-control" placeholder="Buscar entrada" />
    </div>
    <hr>
    <div class="entry-scrollarea">
      <h3 v-for="item in 100" :key="item">
          <Entry />
      </h3>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 97px);
  overflow: scroll;
}
</style>