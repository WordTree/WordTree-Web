import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, withCtx, createVNode, resolveDynamicComponent, createCommentVNode, renderSlot } from 'vue';

const _hoisted_1 = ["disabled", "autofocus", "type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = resolveComponent("loading");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("button", {
    ref: "buttonRef",
    class: normalizeClass([
      "el-button",
      _ctx.buttonType ? "el-button--" + _ctx.buttonType : "",
      _ctx.buttonSize ? "el-button--" + _ctx.buttonSize : "",
      {
        "is-disabled": _ctx.buttonDisabled,
        "is-loading": _ctx.loading,
        "is-plain": _ctx.plain,
        "is-round": _ctx.round,
        "is-circle": _ctx.circle
      }
    ]),
    disabled: _ctx.buttonDisabled || _ctx.loading,
    autofocus: _ctx.autofocus,
    type: _ctx.nativeType,
    style: normalizeStyle(_ctx.buttonStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading ? (openBlock(), createBlock(_component_el_icon, {
      key: 0,
      class: "is-loading"
    }, {
      default: withCtx(() => [
        createVNode(_component_loading)
      ]),
      _: 1
    })) : _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : createCommentVNode("v-if", true),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass({ "el-button__text--expand": _ctx.shouldAddSpace })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : createCommentVNode("v-if", true)
  ], 14, _hoisted_1);
}

export { render };
//# sourceMappingURL=button.vue_vue_type_template_id_802c5c76_lang.mjs.map
