import { resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, renderList, createBlock, createVNode } from 'vue';

const _hoisted_1 = { key: 1 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_cell = resolveComponent("el-descriptions-cell");
  return _ctx.descriptions.direction === "vertical" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    createElementVNode("tr", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, index) => {
        return openBlock(), createBlock(_component_el_descriptions_cell, {
          key: `tr1-${index}`,
          cell,
          tag: "th",
          type: "label"
        }, null, 8, ["cell"]);
      }), 128))
    ]),
    createElementVNode("tr", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, index) => {
        return openBlock(), createBlock(_component_el_descriptions_cell, {
          key: `tr2-${index}`,
          cell,
          tag: "td",
          type: "content"
        }, null, 8, ["cell"]);
      }), 128))
    ])
  ], 64)) : (openBlock(), createElementBlock("tr", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.row, (cell, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: `tr3-${index}`
      }, [
        _ctx.descriptions.border ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_component_el_descriptions_cell, {
            cell,
            tag: "td",
            type: "label"
          }, null, 8, ["cell"]),
          createVNode(_component_el_descriptions_cell, {
            cell,
            tag: "td",
            type: "content"
          }, null, 8, ["cell"])
        ], 64)) : (openBlock(), createBlock(_component_el_descriptions_cell, {
          key: 1,
          cell,
          tag: "td",
          type: "both"
        }, null, 8, ["cell"]))
      ], 64);
    }), 128))
  ]));
}

export { render };
//# sourceMappingURL=descriptions-row.vue_vue_type_template_id_29b1db72_lang.mjs.map
