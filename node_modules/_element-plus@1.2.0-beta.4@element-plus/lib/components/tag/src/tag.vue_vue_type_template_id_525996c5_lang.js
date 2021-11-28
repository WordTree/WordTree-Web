'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = vue.resolveComponent("close");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return !_ctx.disableTransitions ? (vue.openBlock(), vue.createElementBlock("span", {
    key: 0,
    class: vue.normalizeClass(_ctx.classes),
    style: vue.normalizeStyle({ backgroundColor: _ctx.color }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    vue.renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
      key: 0,
      class: "el-tag__close",
      onClick: _ctx.handleClose
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_close)
      ]),
      _: 1
    }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
  ], 6)) : (vue.openBlock(), vue.createBlock(vue.Transition, {
    key: 1,
    name: "el-zoom-in-center"
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(_ctx.classes),
        style: vue.normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: "el-tag__close",
          onClick: _ctx.handleClose
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
      ], 6)
    ]),
    _: 3
  }));
}

exports.render = render;
//# sourceMappingURL=tag.vue_vue_type_template_id_525996c5_lang.js.map
