'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { style: {
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  display: "inline-block",
  boxSizing: "border-box",
  padding: "0 20px"
} };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass(["el-menu-item", {
      "is-active": _ctx.active,
      "is-disabled": _ctx.disabled
    }]),
    role: "menuitem",
    tabindex: "-1",
    style: vue.normalizeStyle(_ctx.paddingStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (vue.openBlock(), vue.createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right"
    }, {
      content: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["effect"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}

exports.render = render;
//# sourceMappingURL=menu-item.vue_vue_type_template_id_aa755baa_lang.js.map
