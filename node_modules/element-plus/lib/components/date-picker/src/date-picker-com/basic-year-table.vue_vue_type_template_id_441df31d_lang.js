'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
const _hoisted_11 = /* @__PURE__ */ vue.createElementVNode("td", null, null, -1);
const _hoisted_12 = /* @__PURE__ */ vue.createElementVNode("td", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("table", {
    class: "el-year-table",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleYearTableClick && _ctx.handleYearTableClick(...args))
  }, [
    vue.createElementVNode("tbody", null, [
      vue.createElementVNode("tr", null, [
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 0)])
        }, [
          vue.createElementVNode("a", _hoisted_1, vue.toDisplayString(_ctx.startYear), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 1)])
        }, [
          vue.createElementVNode("a", _hoisted_2, vue.toDisplayString(_ctx.startYear + 1), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 2)])
        }, [
          vue.createElementVNode("a", _hoisted_3, vue.toDisplayString(_ctx.startYear + 2), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 3)])
        }, [
          vue.createElementVNode("a", _hoisted_4, vue.toDisplayString(_ctx.startYear + 3), 1)
        ], 2)
      ]),
      vue.createElementVNode("tr", null, [
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 4)])
        }, [
          vue.createElementVNode("a", _hoisted_5, vue.toDisplayString(_ctx.startYear + 4), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 5)])
        }, [
          vue.createElementVNode("a", _hoisted_6, vue.toDisplayString(_ctx.startYear + 5), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 6)])
        }, [
          vue.createElementVNode("a", _hoisted_7, vue.toDisplayString(_ctx.startYear + 6), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 7)])
        }, [
          vue.createElementVNode("a", _hoisted_8, vue.toDisplayString(_ctx.startYear + 7), 1)
        ], 2)
      ]),
      vue.createElementVNode("tr", null, [
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 8)])
        }, [
          vue.createElementVNode("a", _hoisted_9, vue.toDisplayString(_ctx.startYear + 8), 1)
        ], 2),
        vue.createElementVNode("td", {
          class: vue.normalizeClass(["available", _ctx.getCellStyle(_ctx.startYear + 9)])
        }, [
          vue.createElementVNode("a", _hoisted_10, vue.toDisplayString(_ctx.startYear + 9), 1)
        ], 2),
        _hoisted_11,
        _hoisted_12
      ])
    ])
  ]);
}

exports.render = render;
//# sourceMappingURL=basic-year-table.vue_vue_type_template_id_441df31d_lang.js.map
