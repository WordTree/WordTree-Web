<template>
  <div id="container-circle"></div>
</template>

<script>
import { Pie } from "@antv/g2plot";

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

export default {
  name: "WordDataCircle",

  props: {
    data: [],
  },
  methods:{
    changeData(newData){
    }
  },
  mounted() {
    piePlot.data = this.data;
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