import { resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, renderSlot } from 'vue';

const _hoisted_1 = ["aria-disabled", "tabindex"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["el-dropdown-menu__item", {
      "is-disabled": _ctx.disabled,
      "el-dropdown-menu__item--divided": _ctx.divided
    }]),
    "aria-disabled": _ctx.disabled,
    tabindex: _ctx.disabled ? null : -1,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1);
}

export { render };
//# sourceMappingURL=dropdown-item.vue_vue_type_template_id_396ed16b_lang.mjs.map
