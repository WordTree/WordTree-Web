'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-checked", "aria-disabled", "tabindex"];
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", { class: "el-radio__inner" }, null, -1);
const _hoisted_3 = ["value", "name", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("label", {
    class: vue.normalizeClass(["el-radio", {
      [`el-radio--${_ctx.size || ""}`]: _ctx.size,
      "is-disabled": _ctx.disabled,
      "is-focus": _ctx.focus,
      "is-bordered": _ctx.border,
      "is-checked": _ctx.modelValue === _ctx.label
    }]),
    role: "radio",
    "aria-checked": _ctx.modelValue === _ctx.label,
    "aria-disabled": _ctx.disabled,
    tabindex: _ctx.tabIndex,
    onKeydown: _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(($event) => _ctx.modelValue = _ctx.disabled ? _ctx.modelValue : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [
    vue.createElementVNode("span", {
      class: vue.normalizeClass(["el-radio__input", {
        "is-disabled": _ctx.disabled,
        "is-checked": _ctx.modelValue === _ctx.label
      }])
    }, [
      _hoisted_2,
      vue.withDirectives(vue.createElementVNode("input", {
        ref: "radioRef",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValue = $event),
        class: "el-radio__original",
        value: _ctx.label,
        type: "radio",
        "aria-hidden": "true",
        name: _ctx.name,
        disabled: _ctx.disabled,
        tabindex: "-1",
        onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.focus = true),
        onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.focus = false),
        onChange: _cache[3] || (_cache[3] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
      }, null, 40, _hoisted_3), [
        [vue.vModelRadio, _ctx.modelValue]
      ])
    ], 2),
    vue.createElementVNode("span", {
      class: "el-radio__label",
      onKeydown: _cache[4] || (_cache[4] = vue.withModifiers(() => {
      }, ["stop"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
      ])
    ], 32)
  ], 42, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=radio.vue_vue_type_template_id_6aa3dfc7_lang.js.map
