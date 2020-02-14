<template>
  <div id="app">
    <globalHeader />
    <router-view />
  </div>
</template>

<script>
import globalHeader from "./components/globalHeader.vue";
export default {
  name: "app",
  components: {
    globalHeader
  }
};
</script>>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/font/index.scss";
</style>
