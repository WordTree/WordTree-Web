import { defineComponent, inject, h } from 'vue';
import { treeNodeContentProps, ROOT_TREE_INJECTION_KEY } from './virtual-tree.mjs';

var ElNodeContent = defineComponent({
  name: "ElTreeNodeContent",
  props: treeNodeContentProps,
  setup(props) {
    const tree = inject(ROOT_TREE_INJECTION_KEY);
    return () => {
      const node = props.node;
      const { data } = node;
      return (tree == null ? void 0 : tree.ctx.slots.default) ? tree.ctx.slots.default({ node, data }) : h("span", { class: "el-tree-node__label" }, [node == null ? void 0 : node.label]);
    };
  }
});

export { ElNodeContent as default };
//# sourceMappingURL=tree-node-content.mjs.map
