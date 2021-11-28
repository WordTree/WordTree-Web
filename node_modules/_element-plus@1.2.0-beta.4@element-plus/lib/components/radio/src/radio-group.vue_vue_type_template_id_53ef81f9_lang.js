'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "radioGroupRef",
    class: "el-radio-group",
    role: "radiogroup",
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 544);
}

exports.render = render;
//# sourceMappingURL=radio-group.vue_vue_type_template_id_53ef81f9_lang.js.map
