'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.shouldBeRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    id: `pane-${_ctx.paneName}`,
    class: "el-tab-pane",
    role: "tabpanel",
    "aria-hidden": !_ctx.active,
    "aria-labelledby": `tab-${_ctx.paneName}`
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1)), [
    [vue.vShow, _ctx.active]
  ]) : vue.createCommentVNode("v-if", true);
}

exports.render = render;
//# sourceMappingURL=tab-pane.vue_vue_type_template_id_46ec5d32_lang.js.map
