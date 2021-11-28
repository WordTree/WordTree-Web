import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, withCtx, renderSlot, createElementVNode, Fragment } from 'vue';

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
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["el-menu-item", {
      "is-active": _ctx.active,
      "is-disabled": _ctx.disabled
    }]),
    role: "menuitem",
    tabindex: "-1",
    style: normalizeStyle(_ctx.paddingStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right"
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}

export { render };
//# sourceMappingURL=menu-item.vue_vue_type_template_id_aa755baa_lang.mjs.map
