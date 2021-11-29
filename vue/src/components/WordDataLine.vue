<template>
  <div id="container-line"></div>
</template>

<script>
import { Line } from "@antv/g2plot";

export default {
  name: "WordDataLine",
  props: {
    data: [],
  },
  mounted() {
    let data = this.data;

    const line = new Line("container-line", {
      data,
      padding: "auto",
      xField: "date",
      yField: "time",
      smooth: true,
      grid: "null",
      yAxis: false,
      xAxis: false,
      lineStyle: {
        lineWidth:1,
        shadowColor:"blue",
        shadowOffsetY:10,
        shadowOffsetX:0,
        shadowBlur:60
      },
    });
    line.render();
  },
};
</script>

<style scoped>
#container-line {
  width: 90%;
  max-height: 90px;
}
</style>