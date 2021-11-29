<template>
    <div id="container"></div>
</template>

<script>
import { Column } from "@antv/g2plot";
export default {
  name: "WordDataColumn",
  props: {
    data: [],
  },
  mounted() {
    let data = this.data;
    const column = new Column("container", {
      data,
      supportCSSTransform:"true",
      xField: "date",
      yField: "value",
      seriesField: "type",
      isGroup: "true",
      autoFit:"true",
      forceFit:"true",
      maxColumnWidth: 30,
      columnStyle: {
        radius: [20, 20, 0, 0],
        fillOpacity: 0.9,
      },
    });
    column.on('container:onresize',()=>{
      column.render();
    })
    column.render();
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  min-height: 400px;
  flex:1;
}


</style>