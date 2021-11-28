'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Transition, { name: "el-scrollbar-fade" }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createElementVNode("div", {
        ref: "instance",
        class: vue.normalizeClass(["el-scrollbar__bar", "is-" + _ctx.bar.key]),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.clickTrackHandler && _ctx.clickTrackHandler(...args))
      }, [
        vue.createElementVNode("div", {
          ref: "thumb",
          class: "el-scrollbar__thumb",
          style: vue.normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.clickThumbHandler && _ctx.clickThumbHandler(...args))
        }, null, 36)
      ], 34), [
        [vue.vShow, _ctx.always || _ctx.visible]
      ])
    ]),
    _: 1
  });
}

exports.render = render;
//# sourceMappingURL=bar.vue_vue_type_template_id_2f63f10a_lang.js.map
