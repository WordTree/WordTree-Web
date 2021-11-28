'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_caret_top = vue.resolveComponent("caret-top");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createBlock(vue.Transition, { name: "el-fade-in" }, {
    default: vue.withCtx(() => [
      _ctx.visible ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        style: vue.normalizeStyle({
          right: _ctx.styleRight,
          bottom: _ctx.styleBottom
        }),
        class: "el-backtop",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createVNode(_component_el_icon, { class: "el-backtop__icon" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_caret_top)
            ]),
            _: 1
          })
        ])
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]),
    _: 3
  });
}

exports.render = render;
//# sourceMappingURL=backtop.vue_vue_type_template_id_63a7fea6_lang.js.map
