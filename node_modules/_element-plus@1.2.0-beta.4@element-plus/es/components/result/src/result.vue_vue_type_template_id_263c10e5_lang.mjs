import { openBlock, createElementBlock, createElementVNode, renderSlot, createBlock, resolveDynamicComponent, normalizeClass, createCommentVNode, toDisplayString } from 'vue';

const _hoisted_1 = { class: "el-result" };
const _hoisted_2 = { class: "el-result__icon" };
const _hoisted_3 = {
  key: 0,
  class: "el-result__title"
};
const _hoisted_4 = {
  key: 1,
  class: "el-result__subtitle"
};
const _hoisted_5 = {
  key: 2,
  class: "el-result__extra"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.resultIcon.component ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.resultIcon.component), {
          key: 0,
          class: normalizeClass(_ctx.resultIcon.class)
        }, null, 8, ["class"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "title", {}, () => [
        createElementVNode("p", null, toDisplayString(_ctx.title), 1)
      ])
    ])) : createCommentVNode("v-if", true),
    _ctx.subTitle || _ctx.$slots.subTitle ? (openBlock(), createElementBlock("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "subTitle", {}, () => [
        createElementVNode("p", null, toDisplayString(_ctx.subTitle), 1)
      ])
    ])) : createCommentVNode("v-if", true),
    _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "extra")
    ])) : createCommentVNode("v-if", true)
  ]);
}

export { render };
//# sourceMappingURL=result.vue_vue_type_template_id_263c10e5_lang.mjs.map
