import { openBlock, createElementBlock, normalizeStyle, normalizeClass, withModifiers, renderSlot, createElementVNode, toDisplayString } from 'vue';

const _hoisted_1 = ["aria-selected"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    "aria-selected": _ctx.selected,
    style: normalizeStyle(_ctx.style),
    class: normalizeClass({
      "el-select-dropdown__option-item": true,
      "is-selected": _ctx.selected,
      "is-disabled": _ctx.disabled,
      "is-created": _ctx.created,
      hover: _ctx.hovering
    }),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {
      item: _ctx.item,
      index: _ctx.index,
      disabled: _ctx.disabled
    }, () => [
      createElementVNode("span", null, toDisplayString(_ctx.item.label), 1)
    ])
  ], 46, _hoisted_1);
}

export { render };
//# sourceMappingURL=option-item.vue_vue_type_template_id_119b30a9_lang.mjs.map
