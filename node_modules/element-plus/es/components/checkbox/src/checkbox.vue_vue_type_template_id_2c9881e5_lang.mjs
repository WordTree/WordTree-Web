import { createElementVNode, openBlock, createElementBlock, normalizeClass, withDirectives, vModelCheckbox, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode } from 'vue';

const _hoisted_1 = ["id", "aria-controls"];
const _hoisted_2 = ["tabindex", "role", "aria-checked"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("span", { class: "el-checkbox__inner" }, null, -1);
const _hoisted_4 = ["aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_5 = ["aria-hidden", "disabled", "value", "name", "tabindex"];
const _hoisted_6 = {
  key: 0,
  class: "el-checkbox__label"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    id: _ctx.id,
    class: normalizeClass(["el-checkbox", [
      _ctx.checkboxSize ? "el-checkbox--" + _ctx.checkboxSize : "",
      { "is-disabled": _ctx.isDisabled },
      { "is-bordered": _ctx.border },
      { "is-checked": _ctx.isChecked }
    ]]),
    "aria-controls": _ctx.indeterminate ? _ctx.controls : null
  }, [
    createElementVNode("span", {
      class: normalizeClass(["el-checkbox__input", {
        "is-disabled": _ctx.isDisabled,
        "is-checked": _ctx.isChecked,
        "is-indeterminate": _ctx.indeterminate,
        "is-focus": _ctx.focus
      }]),
      tabindex: _ctx.indeterminate ? 0 : void 0,
      role: _ctx.indeterminate ? "checkbox" : void 0,
      "aria-checked": _ctx.indeterminate ? "mixed" : false
    }, [
      _hoisted_3,
      _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
        key: 0,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
        class: "el-checkbox__original",
        type: "checkbox",
        "aria-hidden": _ctx.indeterminate ? "true" : "false",
        name: _ctx.name,
        tabindex: _ctx.tabindex,
        disabled: _ctx.isDisabled,
        "true-value": _ctx.trueLabel,
        "false-value": _ctx.falseLabel,
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.focus = true),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focus = false)
      }, null, 40, _hoisted_4)), [
        [vModelCheckbox, _ctx.model]
      ]) : withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.model = $event),
        class: "el-checkbox__original",
        type: "checkbox",
        "aria-hidden": _ctx.indeterminate ? "true" : "false",
        disabled: _ctx.isDisabled,
        value: _ctx.label,
        name: _ctx.name,
        tabindex: _ctx.tabindex,
        onChange: _cache[5] || (_cache[5] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.focus = true),
        onBlur: _cache[7] || (_cache[7] = ($event) => _ctx.focus = false)
      }, null, 40, _hoisted_5)), [
        [vModelCheckbox, _ctx.model]
      ])
    ], 10, _hoisted_2),
    _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", _hoisted_6, [
      renderSlot(_ctx.$slots, "default"),
      !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ], 2112)) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

export { render };
//# sourceMappingURL=checkbox.vue_vue_type_template_id_2c9881e5_lang.mjs.map
