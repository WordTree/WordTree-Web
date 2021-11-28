import { defineComponent, inject, h } from 'vue';

var script = defineComponent({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const nodeInstance = inject("NodeInstance");
    const tree = inject("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(h, { _self: nodeInstance, node, data, store }) : tree.ctx.slots.default ? tree.ctx.slots.default({ node, data }) : h("span", { class: "el-tree-node__label" }, [node.label]);
    };
  }
});

export { script as default };
//# sourceMappingURL=tree-node-content.vue_vue_type_script_lang.mjs.map
