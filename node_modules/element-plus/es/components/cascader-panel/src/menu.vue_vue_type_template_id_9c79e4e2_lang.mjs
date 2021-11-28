import { resolveComponent, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';

const _hoisted_1 = {
  key: 0,
  class: "el-cascader-menu__empty-text"
};
const _hoisted_2 = {
  key: 1,
  ref: "hoverZone",
  class: "el-cascader-menu__hover-zone"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_node = resolveComponent("el-cascader-node");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(_component_el_scrollbar, {
    key: _ctx.menuId,
    tag: "ul",
    role: "menu",
    class: "el-cascader-menu",
    "wrap-class": "el-cascader-menu__wrap",
    "view-class": ["el-cascader-menu__list", _ctx.isEmpty && "is-empty"],
    onMousemove: _ctx.handleMouseMove,
    onMouseleave: _ctx.clearHoverZone
  }, {
    default: withCtx(() => {
      var _a;
      return [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.nodes, (node) => {
          return openBlock(), createBlock(_component_el_cascader_node, {
            key: node.uid,
            node,
            "menu-id": _ctx.menuId,
            onExpand: _ctx.handleExpand
          }, null, 8, ["node", "menu-id", "onExpand"]);
        }), 128)),
        _ctx.isEmpty ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(_ctx.t("el.cascader.noData")), 1)) : ((_a = _ctx.panel) == null ? void 0 : _a.isHoverMenu) ? (openBlock(), createElementBlock("svg", _hoisted_2, null, 512)) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
  }, 8, ["view-class", "onMousemove", "onMouseleave"]);
}

export { render };
//# sourceMappingURL=menu.vue_vue_type_template_id_9c79e4e2_lang.mjs.map
