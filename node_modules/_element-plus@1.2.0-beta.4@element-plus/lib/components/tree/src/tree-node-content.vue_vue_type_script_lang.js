'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const nodeInstance = vue.inject("NodeInstance");
    const tree = vue.inject("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(vue.h, { _self: nodeInstance, node, data, store }) : tree.ctx.slots.default ? tree.ctx.slots.default({ node, data }) : vue.h("span", { class: "el-tree-node__label" }, [node.label]);
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=tree-node-content.vue_vue_type_script_lang.js.map
