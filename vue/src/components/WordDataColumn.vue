<template>
  <el-card shadow="hover" class="card">
    <div id="container"></div>
  </el-card>
</template>

<script>
import { Column } from "@antv/g2plot";
export default {
  name: "WordDataColumn",
  props:{
      data:[]
  },
  mounted() {
      let data = this.data;
    const stackedColumnPlot = new Column("container", {
      data,
      isStack: true,
      xField: "date",
      yField: "value",
      seriesField: "type",
      colorField: "type", // 部分图表使用 seriesField
      color: ["#d62728", "#2ca02c", "#000000"],
      label: {
        // 可手动配置 label 数据标签位置
        position: "middle", // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: "interval-adjust-position" },
          // 数据标签防遮挡
          { type: "interval-hide-overlap" },
          // 数据标签文颜色自动调整
          { type: "adjust-color" },
        ],
      },
    });
    stackedColumnPlot.render();
  },
};
</script>

<style scoped>
.card {
  width: 75%;
  height: 440px;
}
</style>