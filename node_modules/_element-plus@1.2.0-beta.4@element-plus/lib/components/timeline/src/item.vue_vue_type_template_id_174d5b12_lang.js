'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "el-timeline-item__tail" }, null, -1);
const _hoisted_2 = {
  key: 1,
  class: "el-timeline-item__dot"
};
const _hoisted_3 = { class: "el-timeline-item__wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "el-timeline-item__timestamp is-top"
};
const _hoisted_5 = { class: "el-timeline-item__content" };
const _hoisted_6 = {
  key: 1,
  class: "el-timeline-item__timestamp is-bottom"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass(["el-timeline-item", { "el-timeline-item__center": _ctx.center }])
  }, [
    _hoisted_1,
    !_ctx.$slots.dot ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(["el-timeline-item__node", [
        `el-timeline-item__node--${_ctx.size || ""}`,
        `el-timeline-item__node--${_ctx.type || ""}`,
        _ctx.hollow ? "is-hollow" : ""
      ]]),
      style: vue.normalizeStyle({
        backgroundColor: _ctx.color
      })
    }, [
      _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
        key: 0,
        class: "el-timeline-item__icon"
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true),
    _ctx.$slots.dot ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "dot")
    ])) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_3, [
      !_ctx.hideTimestamp && _ctx.placement === "top" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, vue.toDisplayString(_ctx.timestamp), 1)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_5, [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      !_ctx.hideTimestamp && _ctx.placement === "bottom" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, vue.toDisplayString(_ctx.timestamp), 1)) : vue.createCommentVNode("v-if", true)
    ])
  ], 2);
}

exports.render = render;
//# sourceMappingURL=item.vue_vue_type_template_id_174d5b12_lang.js.map
