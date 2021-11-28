'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var virtualTree = require('./virtual-tree.js');

var ElNodeContent = vue.defineComponent({
  name: "ElTreeNodeContent",
  props: virtualTree.treeNodeContentProps,
  setup(props) {
    const tree = vue.inject(virtualTree.ROOT_TREE_INJECTION_KEY);
    return () => {
      const node = props.node;
      const { data } = node;
      return (tree == null ? void 0 : tree.ctx.slots.default) ? tree.ctx.slots.default({ node, data }) : vue.h("span", { class: "el-tree-node__label" }, [node == null ? void 0 : node.label]);
    };
  }
});

exports["default"] = ElNodeContent;
//# sourceMappingURL=tree-node-content.js.map
