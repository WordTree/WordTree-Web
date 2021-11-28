'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-color-hue-slider", { "is-vertical": _ctx.vertical }])
  }, [
    vue.createElementVNode("div", {
      ref: "bar",
      class: "el-color-hue-slider__bar",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, null, 512),
    vue.createElementVNode("div", {
      ref: "thumb",
      class: "el-color-hue-slider__thumb",
      style: vue.normalizeStyle({
        left: _ctx.thumbLeft + "px",
        top: _ctx.thumbTop + "px"
      })
    }, null, 4)
  ], 2);
}

exports.render = render;
//# sourceMappingURL=hue-slider.vue_vue_type_template_id_129d2b72_lang.js.map
