'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-descriptions" };
const _hoisted_2 = {
  key: 0,
  class: "el-descriptions__header"
};
const _hoisted_3 = { class: "el-descriptions__title" };
const _hoisted_4 = { class: "el-descriptions__extra" };
const _hoisted_5 = { class: "el-descriptions__body" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_row = vue.resolveComponent("el-descriptions-row");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    _ctx.title || _ctx.extra || _ctx.$slots.title || _ctx.$slots.extra ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
      vue.createElementVNode("div", _hoisted_3, [
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
        ])
      ]),
      vue.createElementVNode("div", _hoisted_4, [
        vue.renderSlot(_ctx.$slots, "extra", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.extra), 1)
        ])
      ])
    ])) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_5, [
      vue.createElementVNode("table", {
        class: vue.normalizeClass([
          "el-descriptions__table",
          { "is-bordered": _ctx.border },
          _ctx.descriptionsSize ? `el-descriptions--${_ctx.descriptionsSize}` : ""
        ])
      }, [
        vue.createElementVNode("tbody", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.getRows(), (row, index) => {
            return vue.openBlock(), vue.createBlock(_component_el_descriptions_row, {
              key: index,
              row
            }, null, 8, ["row"]);
          }), 128))
        ])
      ], 2)
    ])
  ]);
}

exports.render = render;
//# sourceMappingURL=index.vue_vue_type_template_id_788d3854_lang.js.map
