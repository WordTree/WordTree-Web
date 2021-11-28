'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["disabled", "autofocus", "type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = vue.resolveComponent("loading");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("button", {
    ref: "buttonRef",
    class: vue.normalizeClass([
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
    style: vue.normalizeStyle(_ctx.buttonStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
      key: 0,
      class: "is-loading"
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_loading)
      ]),
      _: 1
    })) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 1 }, {
      default: vue.withCtx(() => [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : vue.createCommentVNode("v-if", true),
    _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 2,
      class: vue.normalizeClass({ "el-button__text--expand": _ctx.shouldAddSpace })
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 14, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=button.vue_vue_type_template_id_802c5c76_lang.js.map
