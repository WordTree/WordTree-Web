'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("form", {
    class: vue.normalizeClass(["el-form", [
      _ctx.labelPosition ? "el-form--label-" + _ctx.labelPosition : "",
      { "el-form--inline": _ctx.inline }
    ]])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}

exports.render = render;
//# sourceMappingURL=form.vue_vue_type_template_id_602d6cf6_lang.js.map
