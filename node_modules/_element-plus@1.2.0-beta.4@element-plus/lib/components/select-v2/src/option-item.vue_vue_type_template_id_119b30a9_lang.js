'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-selected"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("li", {
    "aria-selected": _ctx.selected,
    style: vue.normalizeStyle(_ctx.style),
    class: vue.normalizeClass({
      "el-select-dropdown__option-item": true,
      "is-selected": _ctx.selected,
      "is-disabled": _ctx.disabled,
      "is-created": _ctx.created,
      hover: _ctx.hovering
    }),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    vue.renderSlot(_ctx.$slots, "default", {
      item: _ctx.item,
      index: _ctx.index,
      disabled: _ctx.disabled
    }, () => [
      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.item.label), 1)
    ])
  ], 46, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=option-item.vue_vue_type_template_id_119b30a9_lang.js.map
