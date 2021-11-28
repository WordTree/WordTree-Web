import { openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass({
      "el-check-tag": true,
      "is-checked": _ctx.checked
    }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_58558910_lang.mjs.map
