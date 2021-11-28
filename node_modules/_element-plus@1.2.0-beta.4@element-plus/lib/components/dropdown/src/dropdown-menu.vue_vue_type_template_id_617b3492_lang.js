'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickOutside = vue.resolveDirective("clickOutside");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("ul", {
    class: vue.normalizeClass([[_ctx.size && `el-dropdown-menu--${_ctx.size}`], "el-dropdown-menu"]),
    onMouseenter: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.show && _ctx.show(...args), ["stop"])),
    onMouseleave: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.hide && _ctx.hide(...args), ["stop"]))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 34)), [
    [_directive_clickOutside, _ctx.innerHide, _ctx.triggerElm]
  ]);
}

exports.render = render;
//# sourceMappingURL=dropdown-menu.vue_vue_type_template_id_617b3492_lang.js.map
