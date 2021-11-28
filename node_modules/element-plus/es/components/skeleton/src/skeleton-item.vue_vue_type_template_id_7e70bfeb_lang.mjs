import { resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_placeholder = resolveComponent("img-placeholder");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-skeleton__item", `el-skeleton__${_ctx.variant}`])
  }, [
    _ctx.variant === "image" ? (openBlock(), createBlock(_component_img_placeholder, { key: 0 })) : createCommentVNode("v-if", true)
  ], 2);
}

export { render };
//# sourceMappingURL=skeleton-item.vue_vue_type_template_id_7e70bfeb_lang.mjs.map
