'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-alert__content" };
const _hoisted_2 = {
  key: 1,
  class: "el-alert__description"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_close = vue.resolveComponent("close");
  return vue.openBlock(), vue.createBlock(vue.Transition, { name: "el-alert-fade" }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createElementVNode("div", {
        class: vue.normalizeClass(["el-alert", [_ctx.typeClass, _ctx.center ? "is-center" : "", "is-" + _ctx.effect]]),
        role: "alert"
      }, [
        _ctx.showIcon && _ctx.iconComponent ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: vue.normalizeClass(["el-alert__icon", _ctx.isBigIcon])
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", _hoisted_1, [
          _ctx.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass(["el-alert__title", [_ctx.isBoldTitle]])
          }, [
            vue.renderSlot(_ctx.$slots, "title", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          _ctx.$slots.default || _ctx.description ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.description), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.closable ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            _ctx.closeText ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "el-alert__closebtn is-customed",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
            }, vue.toDisplayString(_ctx.closeText), 1)) : (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 1,
              class: "el-alert__closebtn",
              onClick: _ctx.close
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_close)
              ]),
              _: 1
            }, 8, ["onClick"]))
          ], 2112)) : vue.createCommentVNode("v-if", true)
        ])
      ], 2), [
        [vue.vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}

exports.render = render;
//# sourceMappingURL=alert.vue_vue_type_template_id_1755b449_lang.js.map
