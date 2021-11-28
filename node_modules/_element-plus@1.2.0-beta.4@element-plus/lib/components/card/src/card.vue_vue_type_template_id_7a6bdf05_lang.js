'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = {
  key: 0,
  class: "el-card__header"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-card", _ctx.shadow ? "is-" + _ctx.shadow + "-shadow" : "is-always-shadow"])
  }, [
    _ctx.$slots.header || _ctx.header ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.renderSlot(_ctx.$slots, "header", {}, () => [
        vue.createTextVNode(vue.toDisplayString(_ctx.header), 1)
      ])
    ])) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", {
      class: "el-card__body",
      style: vue.normalizeStyle(_ctx.bodyStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 2);
}

exports.render = render;
//# sourceMappingURL=card.vue_vue_type_template_id_7a6bdf05_lang.js.map
