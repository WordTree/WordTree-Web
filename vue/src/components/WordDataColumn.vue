<template>
  <div id="container-column"></div>
</template>

<script>
import { Column } from "@antv/g2plot";

const column = new Column("container-column", {
  data,
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
})

export default {
  name: "WordDataColumn",
  props: {
    data: [],
  },
  mounted() {
    let data = this.data;
  ;
    // column.on('container:onresize',()=>{
    //   column.render();
    // })
    column.render();
  },
  watch:{
    data(){
      column.data = this.$data.data;
      column.render();
    }
  }
};
</script>

<style scoped>
#container {
  width: 100%;
  min-height: 400px;
  flex: 1;
}
</style>