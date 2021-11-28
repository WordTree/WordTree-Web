import { openBlock, createElementBlock, normalizeStyle, toDisplayString, createElementVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.item.isTitle ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "el-select-group__title",
    style: normalizeStyle([_ctx.style, { lineHeight: `${_ctx.height}px` }])
  }, toDisplayString(_ctx.item.label), 5)) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: "el-select-group__split",
    style: normalizeStyle(_ctx.style)
  }, [
    createElementVNode("span", {
      class: "el-select-group__split-dash",
      style: normalizeStyle({ top: `${_ctx.height / 2}px` })
    }, null, 4)
  ], 4));
}

export { render };
//# sourceMappingURL=group-item.vue_vue_type_template_id_bef7365a_lang.mjs.map
