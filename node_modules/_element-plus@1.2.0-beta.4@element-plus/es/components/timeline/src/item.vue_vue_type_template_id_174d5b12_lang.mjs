import { createElementVNode, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, renderSlot, toDisplayString } from 'vue';

const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "el-timeline-item__tail" }, null, -1);
const _hoisted_2 = {
  key: 1,
  class: "el-timeline-item__dot"
};
const _hoisted_3 = { class: "el-timeline-item__wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "el-timeline-item__timestamp is-top"
};
const _hoisted_5 = { class: "el-timeline-item__content" };
const _hoisted_6 = {
  key: 1,
  class: "el-timeline-item__timestamp is-bottom"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["el-timeline-item", { "el-timeline-item__center": _ctx.center }])
  }, [
    _hoisted_1,
    !_ctx.$slots.dot ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["el-timeline-item__node", [
        `el-timeline-item__node--${_ctx.size || ""}`,
        `el-timeline-item__node--${_ctx.type || ""}`,
        _ctx.hollow ? "is-hollow" : ""
      ]]),
      style: normalizeStyle({
        backgroundColor: _ctx.color
      })
    }, [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: "el-timeline-item__icon"
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true)
    ], 6)) : createCommentVNode("v-if", true),
    _ctx.$slots.dot ? (openBlock(), createElementBlock("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "dot")
    ])) : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_3, [
      !_ctx.hideTimestamp && _ctx.placement === "top" ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.timestamp), 1)) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_5, [
        renderSlot(_ctx.$slots, "default")
      ]),
      !_ctx.hideTimestamp && _ctx.placement === "bottom" ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(_ctx.timestamp), 1)) : createCommentVNode("v-if", true)
    ])
  ], 2);
}

export { render };
//# sourceMappingURL=item.vue_vue_type_template_id_174d5b12_lang.mjs.map
