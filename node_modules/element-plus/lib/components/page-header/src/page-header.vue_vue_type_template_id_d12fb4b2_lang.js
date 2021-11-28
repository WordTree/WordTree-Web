'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-page-header" };
const _hoisted_2 = {
  key: 0,
  class: "el-page-header__icon"
};
const _hoisted_3 = { class: "el-page-header__title" };
const _hoisted_4 = { class: "el-page-header__content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "el-page-header__left",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      _ctx.icon || _ctx.$slots.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true)
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", _hoisted_3, [
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.title || _ctx.t("el.pageHeader.title")), 1)
        ])
      ])
    ]),
    vue.createElementVNode("div", _hoisted_4, [
      vue.renderSlot(_ctx.$slots, "content", {}, () => [
        vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
      ])
    ])
  ]);
}

exports.render = render;
//# sourceMappingURL=page-header.vue_vue_type_template_id_d12fb4b2_lang.js.map
