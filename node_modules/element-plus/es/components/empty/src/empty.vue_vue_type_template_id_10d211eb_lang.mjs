import { resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, createVNode, toDisplayString, createCommentVNode } from 'vue';

const _hoisted_1 = { class: "el-empty" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "el-empty__description" };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = {
  key: 0,
  class: "el-empty__bottom"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_empty = resolveComponent("img-empty");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "el-empty__image",
      style: normalizeStyle(_ctx.imageStyle)
    }, [
      _ctx.image ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.image,
        ondragstart: "return false"
      }, null, 8, _hoisted_2)) : renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
        createVNode(_component_img_empty)
      ])
    ], 4),
    createElementVNode("div", _hoisted_3, [
      _ctx.$slots.description ? renderSlot(_ctx.$slots, "description", { key: 0 }) : (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(_ctx.emptyDescription), 1))
    ]),
    _ctx.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("v-if", true)
  ]);
}

export { render };
//# sourceMappingURL=empty.vue_vue_type_template_id_10d211eb_lang.mjs.map
