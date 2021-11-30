<template>
  <div id="container-column"></div>
</template>

<script>
import { Column } from "@antv/g2plot";

var column = null;

export default {
  name: "WordDataColumn",
  props: {
    data: [],
  },
  mounted() {
    column = new Column("container-column", {
      data: this.$props.data,
      supportCSSTransform: "true",
      xField: "date",
      yField: "value",
      seriesField: "type",
      isGroup: "true",
      autoFit: "true",
      forceFit: "true",
      colorField: "type",
      color: ["#FC6404", "#FCAD05"],
      // maxColumnWidth: 30,
      columnStyle: {
        radius: [20, 20, 0, 0],
        fillOpacity: 0.9,
      },
    });
    column.render();
  },
  updated() {
    column.changeData(this.$props.data);
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