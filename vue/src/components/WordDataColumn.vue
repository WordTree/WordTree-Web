<template>
  <div class="column-chart">
    <div class="cation">
      <span class="caption-text">近七天学习统计</span>
    </div>
    <div id="container"></div>
  </div>
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
      xField: "date",
      yField: "value",
      seriesField: "type",
      isGroup: "true",
      autoFit:"true",
      maxColumnWidth: 30,
      columnStyle: {
        radius: [20, 20, 0, 0],
        fillOpacity: 0.9,
      },
    });
    column.render();
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  min-height: 400px;
}

.column-chart {
  border-color: transparent;
  border-radius: 6px;
  background-color: #fff;
  padding: 10px;
  height: 420px;
  margin: 25px;
  flex:1 1 auto;
}

.caption-text {
  font-size: 14px;
  color: rgb(89, 89, 89);
}

.caption {
   margin: 20px 0 30px 15px;
   padding:10px;
}

@media (max-width:707px) {
  .column-chart{
    margin:10px;
  }
}
</style>