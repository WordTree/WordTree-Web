import { resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, Transition } from 'vue';

const _hoisted_1 = ["for"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelWrap = resolveComponent("LabelWrap");
  return openBlock(), createElementBlock("div", {
    ref: "formItemRef",
    class: normalizeClass(["el-form-item", _ctx.formItemClass])
  }, [
    createVNode(_component_LabelWrap, {
      "is-auto-width": _ctx.labelStyle.width === "auto",
      "update-all": _ctx.elForm.labelWidth === "auto"
    }, {
      default: withCtx(() => [
        _ctx.label || _ctx.$slots.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: _ctx.labelFor,
          class: "el-form-item__label",
          style: normalizeStyle(_ctx.labelStyle)
        }, [
          renderSlot(_ctx.$slots, "label", { label: _ctx.currentLabel }, () => [
            createTextVNode(toDisplayString(_ctx.currentLabel), 1)
          ])
        ], 12, _hoisted_1)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["is-auto-width", "update-all"]),
    createElementVNode("div", {
      class: "el-form-item__content",
      style: normalizeStyle(_ctx.contentStyle)
    }, [
      renderSlot(_ctx.$slots, "default"),
      createVNode(Transition, { name: "el-zoom-in-top" }, {
        default: withCtx(() => [
          _ctx.shouldShowError ? renderSlot(_ctx.$slots, "error", {
            key: 0,
            error: _ctx.validateMessage
          }, () => [
            createElementVNode("div", {
              class: normalizeClass(["el-form-item__error", {
                "el-form-item__error--inline": typeof _ctx.inlineMessage === "boolean" ? _ctx.inlineMessage : _ctx.elForm.inlineMessage || false
              }])
            }, toDisplayString(_ctx.validateMessage), 3)
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ], 4)
  ], 2);
}

export { render };
//# sourceMappingURL=form-item.vue_vue_type_template_id_24eda48b_lang.mjs.map
