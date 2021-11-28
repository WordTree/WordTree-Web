'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("section", {
    class: vue.normalizeClass(["el-container", { "is-vertical": _ctx.isVertical }])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}

exports.render = render;
//# sourceMappingURL=container.vue_vue_type_template_id_60a2865a_lang.js.map
