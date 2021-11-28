'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass(["el-select-dropdown__item", {
      selected: _ctx.itemSelected,
      "is-disabled": _ctx.isDisabled,
      hover: _ctx.hover
    }]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    vue.renderSlot(_ctx.$slots, "default", {}, () => [
      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vue.vShow, _ctx.visible]
  ]);
}

exports.render = render;
//# sourceMappingURL=option.vue_vue_type_template_id_2feb8304_lang.js.map
