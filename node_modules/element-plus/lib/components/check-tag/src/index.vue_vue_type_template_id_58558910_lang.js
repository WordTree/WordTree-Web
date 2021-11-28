'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("span", {
    class: vue.normalizeClass({
      "el-check-tag": true,
      "is-checked": _ctx.checked
    }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}

exports.render = render;
//# sourceMappingURL=index.vue_vue_type_template_id_58558910_lang.js.map
