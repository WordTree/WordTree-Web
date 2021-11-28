'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { key: 1 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_cell = vue.resolveComponent("el-descriptions-cell");
  return _ctx.descriptions.direction === "vertical" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
    vue.createElementVNode("tr", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.row, (cell, index) => {
        return vue.openBlock(), vue.createBlock(_component_el_descriptions_cell, {
          key: `tr1-${index}`,
          cell,
          tag: "th",
          type: "label"
        }, null, 8, ["cell"]);
      }), 128))
    ]),
    vue.createElementVNode("tr", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.row, (cell, index) => {
        return vue.openBlock(), vue.createBlock(_component_el_descriptions_cell, {
          key: `tr2-${index}`,
          cell,
          tag: "td",
          type: "content"
        }, null, 8, ["cell"]);
      }), 128))
    ])
  ], 64)) : (vue.openBlock(), vue.createElementBlock("tr", _hoisted_1, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.row, (cell, index) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: `tr3-${index}`
      }, [
        _ctx.descriptions.border ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createVNode(_component_el_descriptions_cell, {
            cell,
            tag: "td",
            type: "label"
          }, null, 8, ["cell"]),
          vue.createVNode(_component_el_descriptions_cell, {
            cell,
            tag: "td",
            type: "content"
          }, null, 8, ["cell"])
        ], 64)) : (vue.openBlock(), vue.createBlock(_component_el_descriptions_cell, {
          key: 1,
          cell,
          tag: "td",
          type: "both"
        }, null, 8, ["cell"]))
      ], 64);
    }), 128))
  ]));
}

exports.render = render;
//# sourceMappingURL=descriptions-row.vue_vue_type_template_id_29b1db72_lang.js.map
