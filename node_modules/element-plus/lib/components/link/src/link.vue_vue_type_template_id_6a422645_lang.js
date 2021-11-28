'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 1,
  class: "el-link--inner"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("a", {
    class: vue.normalizeClass([
      "el-link",
      _ctx.type ? `el-link--${_ctx.type}` : "",
      _ctx.disabled && "is-disabled",
      _ctx.underline && !_ctx.disabled && "is-underline"
    ]),
    href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
      default: vue.withCtx(() => [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : vue.createCommentVNode("v-if", true),
    _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ])) : vue.createCommentVNode("v-if", true),
    _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 2 }) : vue.createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=link.vue_vue_type_template_id_6a422645_lang.js.map
