'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-color-alpha-slider", { "is-vertical": _ctx.vertical }])
  }, [
    vue.createElementVNode("div", {
      ref: "bar",
      class: "el-color-alpha-slider__bar",
      style: vue.normalizeStyle({
        background: _ctx.background
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, null, 4),
    vue.createElementVNode("div", {
      ref: "thumb",
      class: "el-color-alpha-slider__thumb",
      style: vue.normalizeStyle({
        left: _ctx.thumbLeft + "px",
        top: _ctx.thumbTop + "px"
      })
    }, null, 4)
  ], 2);
}

exports.render = render;
//# sourceMappingURL=alpha-slider.vue_vue_type_template_id_4fb2624c_lang.js.map
