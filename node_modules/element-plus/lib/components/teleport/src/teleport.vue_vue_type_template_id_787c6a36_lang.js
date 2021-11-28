'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.container ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
    key: 0,
    to: _ctx.container
  }, [
    vue.createElementVNode("div", {
      ref: "containerRef",
      class: "el-teleport",
      style: vue.normalizeStyle(_ctx.containerStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 8, ["to"])) : vue.createCommentVNode("v-if", true);
}

exports.render = render;
//# sourceMappingURL=teleport.vue_vue_type_template_id_787c6a36_lang.js.map
