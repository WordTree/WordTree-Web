'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([
      "el-steps",
      _ctx.simple ? "el-steps--simple" : `el-steps--${_ctx.direction}`
    ])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}

exports.render = render;
//# sourceMappingURL=index.vue_vue_type_template_id_882d196c_lang.js.map
