import { withDirectives, openBlock, createElementBlock, createElementVNode, toDisplayString, renderSlot, vShow } from 'vue';

const _hoisted_1 = { class: "el-select-group__wrap" };
const _hoisted_2 = { class: "el-select-group__title" };
const _hoisted_3 = { class: "el-select-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", _hoisted_1, [
    createElementVNode("li", _hoisted_2, toDisplayString(_ctx.label), 1),
    createElementVNode("li", null, [
      createElementVNode("ul", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ])
    ])
  ], 512)), [
    [vShow, _ctx.visible]
  ]);
}

export { render };
//# sourceMappingURL=option-group.vue_vue_type_template_id_072bbb70_lang.mjs.map
