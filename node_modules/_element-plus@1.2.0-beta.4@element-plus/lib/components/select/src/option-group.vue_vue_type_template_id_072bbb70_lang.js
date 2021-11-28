'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-select-group__wrap" };
const _hoisted_2 = { class: "el-select-group__title" };
const _hoisted_3 = { class: "el-select-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("ul", _hoisted_1, [
    vue.createElementVNode("li", _hoisted_2, vue.toDisplayString(_ctx.label), 1),
    vue.createElementVNode("li", null, [
      vue.createElementVNode("ul", _hoisted_3, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ])
  ], 512)), [
    [vue.vShow, _ctx.visible]
  ]);
}

exports.render = render;
//# sourceMappingURL=option-group.vue_vue_type_template_id_072bbb70_lang.js.map
