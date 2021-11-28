'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-empty" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "el-empty__description" };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = {
  key: 0,
  class: "el-empty__bottom"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_empty = vue.resolveComponent("img-empty");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "el-empty__image",
      style: vue.normalizeStyle(_ctx.imageStyle)
    }, [
      _ctx.image ? (vue.openBlock(), vue.createElementBlock("img", {
        key: 0,
        src: _ctx.image,
        ondragstart: "return false"
      }, null, 8, _hoisted_2)) : vue.renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
        vue.createVNode(_component_img_empty)
      ])
    ], 4),
    vue.createElementVNode("div", _hoisted_3, [
      _ctx.$slots.description ? vue.renderSlot(_ctx.$slots, "description", { key: 0 }) : (vue.openBlock(), vue.createElementBlock("p", _hoisted_4, vue.toDisplayString(_ctx.emptyDescription), 1))
    ]),
    _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
      vue.renderSlot(_ctx.$slots, "default")
    ])) : vue.createCommentVNode("v-if", true)
  ]);
}

exports.render = render;
//# sourceMappingURL=empty.vue_vue_type_template_id_10d211eb_lang.js.map
