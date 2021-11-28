import { defineComponent, h } from 'vue';

var NodeContent = defineComponent({
  name: "NodeContent",
  render() {
    const { node, panel } = this.$parent;
    const { data, label } = node;
    const { renderLabelFn } = panel;
    return h("span", { class: "el-cascader-node__label" }, renderLabelFn ? renderLabelFn({ node, data }) : label);
  }
});

export { NodeContent as default };
//# sourceMappingURL=node-content.mjs.map
