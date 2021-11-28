'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = {
  ref: "scrollbar$",
  class: "el-scrollbar"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bar = vue.resolveComponent("bar");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", {
      ref: "wrap$",
      class: vue.normalizeClass([
        _ctx.wrapClass,
        "el-scrollbar__wrap",
        _ctx.native ? "" : "el-scrollbar__wrap--hidden-default"
      ]),
      style: vue.normalizeStyle(_ctx.style),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        ref: "resize$",
        class: vue.normalizeClass(["el-scrollbar__view", _ctx.viewClass]),
        style: vue.normalizeStyle(_ctx.viewStyle)
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    !_ctx.native ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
      vue.createVNode(_component_bar, {
        move: _ctx.moveX,
        ratio: _ctx.ratioX,
        size: _ctx.sizeWidth,
        always: _ctx.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      vue.createVNode(_component_bar, {
        move: _ctx.moveY,
        ratio: _ctx.ratioY,
        size: _ctx.sizeHeight,
        vertical: "",
        always: _ctx.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64)) : vue.createCommentVNode("v-if", true)
  ], 512);
}

exports.render = render;
//# sourceMappingURL=scrollbar.vue_vue_type_template_id_303f965d_lang.js.map
