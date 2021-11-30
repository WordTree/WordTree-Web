<template>
  <div id="container-line"></div>
</template>

<script>
import { Line } from "@antv/g2plot";

var line = null;

export default {
  name: "WordDataLine",
  props: {
    data: [],
  },
  mounted() {
    line = new Line("container-line", {
      data: this.$props.data,
      padding: "auto",
      xField: "date",
      yField: "time",
      smooth: true,
      grid: "null",
      yAxis: false,
      xAxis: false,
      lineStyle: {
        lineWidth: 1,
        shadowColor: "blue",
        shadowOffsetY: 10,
        shadowOffsetX: 0,
        shadowBlur: 60,
      },
    });
    line.render();
  },
  updated() {
    line.changeData(this.$props.data);
  },
};
</script>

<style scoped>
#container-line {
  width: 90%;
  max-height: 90px;
}
</style>