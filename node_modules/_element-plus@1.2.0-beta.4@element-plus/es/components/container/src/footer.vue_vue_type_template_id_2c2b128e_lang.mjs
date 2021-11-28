import { openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: "el-footer",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}

export { render };
//# sourceMappingURL=footer.vue_vue_type_template_id_2c2b128e_lang.mjs.map
