'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.item.isTitle ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: "el-select-group__title",
    style: vue.normalizeStyle([_ctx.style, { lineHeight: `${_ctx.height}px` }])
  }, vue.toDisplayString(_ctx.item.label), 5)) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    class: "el-select-group__split",
    style: vue.normalizeStyle(_ctx.style)
  }, [
    vue.createElementVNode("span", {
      class: "el-select-group__split-dash",
      style: vue.normalizeStyle({ top: `${_ctx.height / 2}px` })
    }, null, 4)
  ], 4));
}

exports.render = render;
//# sourceMappingURL=group-item.vue_vue_type_template_id_bef7365a_lang.js.map
