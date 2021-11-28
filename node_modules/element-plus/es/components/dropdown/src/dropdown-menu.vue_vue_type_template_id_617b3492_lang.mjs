import { resolveDirective, withDirectives, openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickOutside = resolveDirective("clickOutside");
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass([[_ctx.size && `el-dropdown-menu--${_ctx.size}`], "el-dropdown-menu"]),
    onMouseenter: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.show && _ctx.show(...args), ["stop"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.hide && _ctx.hide(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 34)), [
    [_directive_clickOutside, _ctx.innerHide, _ctx.triggerElm]
  ]);
}

export { render };
//# sourceMappingURL=dropdown-menu.vue_vue_type_template_id_617b3492_lang.mjs.map
