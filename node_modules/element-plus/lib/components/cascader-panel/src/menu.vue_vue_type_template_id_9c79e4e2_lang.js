'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
  const _component_el_cascader_node = vue.resolveComponent("el-cascader-node");
  const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
  return vue.openBlock(), vue.createBlock(_component_el_scrollbar, {
    key: _ctx.menuId,
    tag: "ul",
    role: "menu",
    class: "el-cascader-menu",
    "wrap-class": "el-cascader-menu__wrap",
    "view-class": ["el-cascader-menu__list", _ctx.isEmpty && "is-empty"],
    onMousemove: _ctx.handleMouseMove,
    onMouseleave: _ctx.clearHoverZone
  }, {
    default: vue.withCtx(() => {
      var _a;
      return [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.nodes, (node) => {
          return vue.openBlock(), vue.createBlock(_component_el_cascader_node, {
            key: node.uid,
            node,
            "menu-id": _ctx.menuId,
            onExpand: _ctx.handleExpand
          }, null, 8, ["node", "menu-id", "onExpand"]);
        }), 128)),
        _ctx.isEmpty ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, vue.toDisplayString(_ctx.t("el.cascader.noData")), 1)) : ((_a = _ctx.panel) == null ? void 0 : _a.isHoverMenu) ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_2, null, 512)) : vue.createCommentVNode("v-if", true)
      ];
    }),
    _: 1
  }, 8, ["view-class", "onMousemove", "onMouseleave"]);
}

exports.render = render;
//# sourceMappingURL=menu.vue_vue_type_template_id_9c79e4e2_lang.js.map
