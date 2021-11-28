import { resolveComponent, openBlock, createElementBlock, normalizeClass, Fragment, renderList, createBlock, createElementVNode, toDisplayString, createCommentVNode, withDirectives, vShow } from 'vue';

const _hoisted_1 = {
  key: 0,
  class: "el-tree__empty-block"
};
const _hoisted_2 = { class: "el-tree__empty-text" };
const _hoisted_3 = {
  ref: "dropIndicator$",
  class: "el-tree__drop-indicator"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_tree_node = resolveComponent("el-tree-node");
  return openBlock(), createElementBlock("div", {
    ref: "el$",
    class: normalizeClass(["el-tree", {
      "el-tree--highlight-current": _ctx.highlightCurrent,
      "is-dragging": !!_ctx.dragState.draggingNode,
      "is-drop-not-allow": !_ctx.dragState.allowDrop,
      "is-drop-inner": _ctx.dragState.dropType === "inner"
    }]),
    role: "tree"
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.root.childNodes, (child) => {
      return openBlock(), createBlock(_component_el_tree_node, {
        key: _ctx.getNodeKey(child),
        node: child,
        props: _ctx.props,
        accordion: _ctx.accordion,
        "render-after-expand": _ctx.renderAfterExpand,
        "show-checkbox": _ctx.showCheckbox,
        "render-content": _ctx.renderContent,
        onNodeExpand: _ctx.handleNodeExpand
      }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]);
    }), 128)),
    _ctx.isEmpty ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createElementVNode("span", _hoisted_2, toDisplayString((_a = _ctx.emptyText) != null ? _a : _ctx.t("el.tree.emptyText")), 1)
    ])) : createCommentVNode("v-if", true),
    withDirectives(createElementVNode("div", _hoisted_3, null, 512), [
      [vShow, _ctx.dragState.showDropIndicator]
    ])
  ], 2);
}

export { render };
//# sourceMappingURL=tree.vue_vue_type_template_id_7539bec5_lang.mjs.map
