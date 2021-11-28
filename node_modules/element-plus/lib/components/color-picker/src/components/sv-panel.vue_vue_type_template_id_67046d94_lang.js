'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "el-color-svpanel__white" }, null, -1);
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("div", { class: "el-color-svpanel__black" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("div", null, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: "el-color-svpanel",
    style: vue.normalizeStyle({
      backgroundColor: _ctx.background
    })
  }, [
    _hoisted_1,
    _hoisted_2,
    vue.createElementVNode("div", {
      class: "el-color-svpanel__cursor",
      style: vue.normalizeStyle({
        top: _ctx.cursorTop + "px",
        left: _ctx.cursorLeft + "px"
      })
    }, _hoisted_4, 4)
  ], 4);
}

exports.render = render;
//# sourceMappingURL=sv-panel.vue_vue_type_template_id_67046d94_lang.js.map
