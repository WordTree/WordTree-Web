import { resolveComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode, normalizeClass, Fragment, renderList, createBlock } from 'vue';

const _hoisted_1 = { class: "el-descriptions" };
const _hoisted_2 = {
  key: 0,
  class: "el-descriptions__header"
};
const _hoisted_3 = { class: "el-descriptions__title" };
const _hoisted_4 = { class: "el-descriptions__extra" };
const _hoisted_5 = { class: "el-descriptions__body" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_row = resolveComponent("el-descriptions-row");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.title || _ctx.extra || _ctx.$slots.title || _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ]),
      createElementVNode("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "extra", {}, () => [
          createTextVNode(toDisplayString(_ctx.extra), 1)
        ])
      ])
    ])) : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_5, [
      createElementVNode("table", {
        class: normalizeClass([
          "el-descriptions__table",
          { "is-bordered": _ctx.border },
          _ctx.descriptionsSize ? `el-descriptions--${_ctx.descriptionsSize}` : ""
        ])
      }, [
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getRows(), (row, index) => {
            return openBlock(), createBlock(_component_el_descriptions_row, {
              key: index,
              row
            }, null, 8, ["row"]);
          }), 128))
        ])
      ], 2)
    ])
  ]);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_788d3854_lang.mjs.map
