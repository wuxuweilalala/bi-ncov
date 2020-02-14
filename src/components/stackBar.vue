<template>
  <vECharts :options="options"></vECharts>
</template>

<script>
import vECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
export default {
  name: "stackBar",
  components: {
    vECharts
  },
  props: ["options"]
};
</script>

<style lang="scss" scoped>
/* .echarts {
  width: 100%;
  height: 100%;
} */
</style>