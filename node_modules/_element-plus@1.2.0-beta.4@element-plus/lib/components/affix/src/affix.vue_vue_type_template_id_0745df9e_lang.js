'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "root",
    class: "el-affix",
    style: vue.normalizeStyle(_ctx.rootStyle)
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass({ "el-affix--fixed": _ctx.state.fixed }),
      style: vue.normalizeStyle(_ctx.affixStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 4);
}

exports.render = render;
//# sourceMappingURL=affix.vue_vue_type_template_id_0745df9e_lang.js.map
