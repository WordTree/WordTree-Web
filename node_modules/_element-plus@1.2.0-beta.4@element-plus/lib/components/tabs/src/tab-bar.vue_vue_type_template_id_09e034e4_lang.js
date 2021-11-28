'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "bar$",
    class: vue.normalizeClass(["el-tabs__active-bar", `is-${_ctx.rootTabs.props.tabPosition}`]),
    style: vue.normalizeStyle(_ctx.barStyle)
  }, null, 6);
}

exports.render = render;
//# sourceMappingURL=tab-bar.vue_vue_type_template_id_09e034e4_lang.js.map
