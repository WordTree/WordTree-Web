<template>
  <div id="container-circle"></div>
</template>

<script>
import { Pie } from "@antv/g2plot";

export default {
  name: "WordDataCircle",
  props: {
    data: [],
  },
  mounted() {
    let data = this.data;
    const piePlot = new Pie("container-circle", {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      radius: 0.8,
      label: {
        type: "outer",
        content: "{name} {percentage}",
      },
      interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
    });
    piePlot.render();
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  min-height: 400px;
  flex: 1;
}
</style>