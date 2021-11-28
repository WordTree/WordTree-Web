import { openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("aside", {
    class: "el-aside",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}

export { render };
//# sourceMappingURL=aside.vue_vue_type_template_id_47e12f0a_lang.mjs.map
