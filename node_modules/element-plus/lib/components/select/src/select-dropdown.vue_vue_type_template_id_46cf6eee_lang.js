'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-select-dropdown", [{ "is-multiple": _ctx.isMultiple }, _ctx.popperClass]]),
    style: vue.normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 6);
}

exports.render = render;
//# sourceMappingURL=select-dropdown.vue_vue_type_template_id_46cf6eee_lang.js.map
