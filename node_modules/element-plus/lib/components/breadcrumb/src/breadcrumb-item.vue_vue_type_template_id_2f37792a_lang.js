'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-breadcrumb__item" };
const _hoisted_2 = {
  key: 1,
  class: "el-breadcrumb__separator",
  role: "presentation"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
    vue.createElementVNode("span", {
      ref: "link",
      class: vue.normalizeClass(["el-breadcrumb__inner", _ctx.to ? "is-link" : ""]),
      role: "link"
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.separatorIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
      key: 0,
      class: "el-breadcrumb__separator"
    }, {
      default: vue.withCtx(() => [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.separatorIcon)))
      ]),
      _: 1
    })) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.separator), 1))
  ]);
}

exports.render = render;
//# sourceMappingURL=breadcrumb-item.vue_vue_type_template_id_2f37792a_lang.js.map
