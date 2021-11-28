'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-menu-item-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("li", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "el-menu-item-group__title",
      style: vue.normalizeStyle({ paddingLeft: `${_ctx.levelPadding}px` })
    }, [
      !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
      ], 2112)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 4),
    vue.createElementVNode("ul", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]);
}

exports.render = render;
//# sourceMappingURL=menu-item-group.vue_vue_type_template_id_67a2995d_lang.js.map
