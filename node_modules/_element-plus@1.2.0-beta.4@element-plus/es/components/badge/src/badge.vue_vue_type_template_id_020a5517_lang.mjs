import { openBlock, createElementBlock, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, toDisplayString, vShow } from 'vue';

const _hoisted_1 = { class: "el-badge" };
const _hoisted_2 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(Transition, { name: "el-zoom-in-center" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("sup", {
          class: normalizeClass(["el-badge__content", [
            "el-badge__content--" + _ctx.type,
            {
              "is-fixed": _ctx.$slots.default,
              "is-dot": _ctx.isDot
            }
          ]]),
          textContent: toDisplayString(_ctx.content)
        }, null, 10, _hoisted_2), [
          [vShow, !_ctx.hidden && (_ctx.content || _ctx.content === "0" || _ctx.isDot)]
        ])
      ]),
      _: 1
    })
  ]);
}

export { render };
//# sourceMappingURL=badge.vue_vue_type_template_id_020a5517_lang.mjs.map
