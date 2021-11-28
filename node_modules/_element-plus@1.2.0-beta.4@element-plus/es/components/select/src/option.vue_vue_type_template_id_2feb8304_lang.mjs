import { withDirectives, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot, createElementVNode, toDisplayString, vShow } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass(["el-select-dropdown__item", {
      selected: _ctx.itemSelected,
      "is-disabled": _ctx.isDisabled,
      hover: _ctx.hover
    }]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}

export { render };
//# sourceMappingURL=option.vue_vue_type_template_id_2feb8304_lang.mjs.map
