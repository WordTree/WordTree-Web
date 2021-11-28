'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-result" };
const _hoisted_2 = { class: "el-result__icon" };
const _hoisted_3 = {
  key: 0,
  class: "el-result__title"
};
const _hoisted_4 = {
  key: 1,
  class: "el-result__subtitle"
};
const _hoisted_5 = {
  key: 2,
  class: "el-result__extra"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.resultIcon.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.resultIcon.component), {
          key: 0,
          class: vue.normalizeClass(_ctx.resultIcon.class)
        }, null, 8, ["class"])) : vue.createCommentVNode("v-if", true)
      ])
    ]),
    _ctx.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
      vue.renderSlot(_ctx.$slots, "title", {}, () => [
        vue.createElementVNode("p", null, vue.toDisplayString(_ctx.title), 1)
      ])
    ])) : vue.createCommentVNode("v-if", true),
    _ctx.subTitle || _ctx.$slots.subTitle ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
      vue.renderSlot(_ctx.$slots, "subTitle", {}, () => [
        vue.createElementVNode("p", null, vue.toDisplayString(_ctx.subTitle), 1)
      ])
    ])) : vue.createCommentVNode("v-if", true),
    _ctx.$slots.extra ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
      vue.renderSlot(_ctx.$slots, "extra")
    ])) : vue.createCommentVNode("v-if", true)
  ]);
}

exports.render = render;
//# sourceMappingURL=result.vue_vue_type_template_id_263c10e5_lang.js.map
