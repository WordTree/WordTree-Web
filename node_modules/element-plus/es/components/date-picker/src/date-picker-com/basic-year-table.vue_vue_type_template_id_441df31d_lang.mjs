import { createElementVNode, openBlock, createElementBlock, normalizeClass, toDisplayString } from 'vue';

const _hoisted_1 = { class: "cell" };
const _hoisted_2 = { class: "cell" };
const _hoisted_3 = { class: "cell" };
const _hoisted_4 = { class: "cell" };
const _hoisted_5 = { class: "cell" };
const _hoisted_6 = { class: "cell" };
const _hoisted_7 = { class: "cell" };
const _hoisted_8 = { class: "cell" };
const _hoisted_9 = { class: "cell" };
const _hoisted_10 = { class: "cell" };
const _hoisted_11 = /* @__PURE__ */ createElementVNode("td", null, null, -1);
const _hoisted_12 = /* @__PURE__ */ createElementVNode("td", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", {
    class: "el-year-table",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleYearTableClick && _ctx.handleYearTableClick(...args))
  }, [
    createElementVNode("tbody", null, [
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 0)])
        }, [
          createElementVNode("a", _hoisted_1, toDisplayString(_ctx.startYear), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 1)])
        }, [
          createElementVNode("a", _hoisted_2, toDisplayString(_ctx.startYear + 1), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 2)])
        }, [
          createElementVNode("a", _hoisted_3, toDisplayString(_ctx.startYear + 2), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 3)])
        }, [
          createElementVNode("a", _hoisted_4, toDisplayString(_ctx.startYear + 3), 1)
        ], 2)
      ]),
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 4)])
        }, [
          createElementVNode("a", _hoisted_5, toDisplayString(_ctx.startYear + 4), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 5)])
        }, [
          createElementVNode("a", _hoisted_6, toDisplayString(_ctx.startYear + 5), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 6)])
        }, [
          createElementVNode("a", _hoisted_7, toDisplayString(_ctx.startYear + 6), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 7)])
        }, [
          createElementVNode("a", _hoisted_8, toDisplayString(_ctx.startYear + 7), 1)
        ], 2)
      ]),
      createElementVNode("tr", null, [
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 8)])
        }, [
          createElementVNode("a", _hoisted_9, toDisplayString(_ctx.startYear + 8), 1)
        ], 2),
        createElementVNode("td", {
          class: normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 9)])
        }, [
          createElementVNode("a", _hoisted_10, toDisplayString(_ctx.startYear + 9), 1)
        ], 2),
        _hoisted_11,
        _hoisted_12
      ])
    ])
  ]);
}

export { render };
//# sourceMappingURL=basic-year-table.vue_vue_type_template_id_441df31d_lang.mjs.map
