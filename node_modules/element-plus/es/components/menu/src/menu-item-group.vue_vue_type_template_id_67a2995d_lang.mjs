import { openBlock, createElementBlock, createElementVNode, normalizeStyle, Fragment, createTextVNode, toDisplayString, renderSlot } from 'vue';

const _hoisted_1 = { class: "el-menu-item-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1, [
    createElementVNode("div", {
      class: "el-menu-item-group__title",
      style: normalizeStyle({ paddingLeft: `${_ctx.levelPadding}px` })
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 2112)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 4),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}

export { render };
//# sourceMappingURL=menu-item-group.vue_vue_type_template_id_67a2995d_lang.mjs.map
