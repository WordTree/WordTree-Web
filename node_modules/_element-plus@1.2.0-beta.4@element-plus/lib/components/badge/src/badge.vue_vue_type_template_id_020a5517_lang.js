'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-badge" };
const _hoisted_2 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.renderSlot(_ctx.$slots, "default"),
    vue.createVNode(vue.Transition, { name: "el-zoom-in-center" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("sup", {
          class: vue.normalizeClass(["el-badge__content", [
            "el-badge__content--" + _ctx.type,
            {
              "is-fixed": _ctx.$slots.default,
              "is-dot": _ctx.isDot
            }
          ]]),
          textContent: vue.toDisplayString(_ctx.content)
        }, null, 10, _hoisted_2), [
          [vue.vShow, !_ctx.hidden && (_ctx.content || _ctx.content === "0" || _ctx.isDot)]
        ])
      ]),
      _: 1
    })
  ]);
}

exports.render = render;
//# sourceMappingURL=badge.vue_vue_type_template_id_020a5517_lang.js.map
