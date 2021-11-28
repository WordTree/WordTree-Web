import { openBlock, createElementBlock, normalizeClass, withDirectives, vModelCheckbox, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

const _hoisted_1 = ["aria-checked", "aria-disabled"];
const _hoisted_2 = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_3 = ["name", "tabindex", "disabled", "value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["el-checkbox-button", [
      _ctx.size ? "el-checkbox-button--" + _ctx.size : "",
      { "is-disabled": _ctx.isDisabled },
      { "is-checked": _ctx.isChecked },
      { "is-focus": _ctx.focus }
    ]]),
    role: "checkbox",
    "aria-checked": _ctx.isChecked,
    "aria-disabled": _ctx.isDisabled
  }, [
    _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
      key: 0,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
      class: "el-checkbox-button__original",
      type: "checkbox",
      name: _ctx.name,
      tabindex: _ctx.tabindex,
      disabled: _ctx.isDisabled,
      "true-value": _ctx.trueLabel,
      "false-value": _ctx.falseLabel,
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.focus = true),
      onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focus = false)
    }, null, 40, _hoisted_2)), [
      [vModelCheckbox, _ctx.model]
    ]) : withDirectives((openBlock(), createElementBlock("input", {
      key: 1,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.model = $event),
      class: "el-checkbox-button__original",
      type: "checkbox",
      name: _ctx.name,
      tabindex: _ctx.tabindex,
      disabled: _ctx.isDisabled,
      value: _ctx.label,
      onChange: _cache[5] || (_cache[5] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.focus = true),
      onBlur: _cache[7] || (_cache[7] = ($event) => _ctx.focus = false)
    }, null, 40, _hoisted_3)), [
      [vModelCheckbox, _ctx.model]
    ]),
    _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: "el-checkbox-button__inner",
      style: normalizeStyle(_ctx.isChecked ? _ctx.activeStyle : null)
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 4)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

export { render };
//# sourceMappingURL=checkbox-button.vue_vue_type_template_id_f839a66c_lang.mjs.map
