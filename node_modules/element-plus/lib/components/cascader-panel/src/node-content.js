'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var NodeContent = vue.defineComponent({
  name: "NodeContent",
  render() {
    const { node, panel } = this.$parent;
    const { data, label } = node;
    const { renderLabelFn } = panel;
    return vue.h("span", { class: "el-cascader-node__label" }, renderLabelFn ? renderLabelFn({ node, data }) : label);
  }
});

exports["default"] = NodeContent;
//# sourceMappingURL=node-content.js.map
