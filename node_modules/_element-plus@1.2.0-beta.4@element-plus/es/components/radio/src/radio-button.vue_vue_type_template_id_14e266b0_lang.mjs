import { openBlock, createElementBlock, normalizeClass, withKeys, withModifiers, withDirectives, createElementVNode, vModelRadio, normalizeStyle, renderSlot, createTextVNode, toDisplayString } from 'vue';

const _hoisted_1 = ["aria-checked", "aria-disabled", "tabindex"];
const _hoisted_2 = ["value", "name", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["el-radio-button", [
      _ctx.size ? "el-radio-button--" + _ctx.size : "",
      {
        "is-active": _ctx.modelValue === _ctx.label,
        "is-disabled": _ctx.disabled,
        "is-focus": _ctx.focus
      }
    ]]),
    role: "radio",
    "aria-checked": _ctx.modelValue === _ctx.label,
    "aria-disabled": _ctx.disabled,
    tabindex: _ctx.tabIndex,
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.modelValue = _ctx.disabled ? _ctx.modelValue : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [
    withDirectives(createElementVNode("input", {
      ref: "radioRef",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValue = $event),
      class: "el-radio-button__original-radio",
      value: _ctx.label,
      type: "radio",
      name: _ctx.name,
      disabled: _ctx.disabled,
      tabindex: "-1",
      onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.focus = true),
      onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.focus = false)
    }, null, 40, _hoisted_2), [
      [vModelRadio, _ctx.modelValue]
    ]),
    createElementVNode("span", {
      class: "el-radio-button__inner",
      style: normalizeStyle(_ctx.modelValue === _ctx.label ? _ctx.activeStyle : {}),
      onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
      }, ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 36)
  ], 42, _hoisted_1);
}

export { render };
//# sourceMappingURL=radio-button.vue_vue_type_template_id_14e266b0_lang.mjs.map
