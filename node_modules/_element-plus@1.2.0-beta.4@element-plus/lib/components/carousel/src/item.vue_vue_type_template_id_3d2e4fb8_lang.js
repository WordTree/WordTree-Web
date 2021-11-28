'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = {
  key: 0,
  class: "el-carousel__mask"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-carousel__item", {
      "is-active": _ctx.data.active,
      "el-carousel__item--card": _ctx.type === "card",
      "is-in-stage": _ctx.data.inStage,
      "is-hover": _ctx.data.hover,
      "is-animating": _ctx.data.animating
    }]),
    style: vue.normalizeStyle(_ctx.itemStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleItemClick && _ctx.handleItemClick(...args))
  }, [
    _ctx.type === "card" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, null, 512)), [
      [vue.vShow, !_ctx.data.active]
    ]) : vue.createCommentVNode("v-if", true),
    vue.renderSlot(_ctx.$slots, "default")
  ], 6)), [
    [vue.vShow, _ctx.data.ready]
  ]);
}

exports.render = render;
//# sourceMappingURL=item.vue_vue_type_template_id_3d2e4fb8_lang.js.map
