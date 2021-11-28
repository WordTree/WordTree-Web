'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["disabled", "aria-disabled"];
const _hoisted_2 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("button", {
    type: "button",
    class: "btn-next",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }, [
    _ctx.nextText ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.nextText), 1)) : (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 1 }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_arrow_right)
      ]),
      _: 1
    }))
  ], 8, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=next.vue_vue_type_template_id_93fbb39e_lang.js.map
