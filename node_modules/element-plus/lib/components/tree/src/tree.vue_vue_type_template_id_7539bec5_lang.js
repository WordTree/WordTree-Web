'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
  const _component_el_tree_node = vue.resolveComponent("el-tree-node");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "el$",
    class: vue.normalizeClass(["el-tree", {
      "el-tree--highlight-current": _ctx.highlightCurrent,
      "is-dragging": !!_ctx.dragState.draggingNode,
      "is-drop-not-allow": !_ctx.dragState.allowDrop,
      "is-drop-inner": _ctx.dragState.dropType === "inner"
    }]),
    role: "tree"
  }, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.root.childNodes, (child) => {
      return vue.openBlock(), vue.createBlock(_component_el_tree_node, {
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
    _ctx.isEmpty ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("span", _hoisted_2, vue.toDisplayString((_a = _ctx.emptyText) != null ? _a : _ctx.t("el.tree.emptyText")), 1)
    ])) : vue.createCommentVNode("v-if", true),
    vue.withDirectives(vue.createElementVNode("div", _hoisted_3, null, 512), [
      [vue.vShow, _ctx.dragState.showDropIndicator]
    ])
  ], 2);
}

exports.render = render;
//# sourceMappingURL=tree.vue_vue_type_template_id_7539bec5_lang.js.map
