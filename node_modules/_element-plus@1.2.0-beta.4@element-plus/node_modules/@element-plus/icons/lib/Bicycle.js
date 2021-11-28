'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Bicycle"
});

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  fill: "currentColor",
  d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ vue.createVNode("path", {
  fill: "currentColor",
  d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ vue.createVNode("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ vue.createVNode("path", {
  fill: "currentColor",
  d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ vue.createVNode("path", {
  fill: "currentColor",
  d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6
  ]);
}

script.render = render;
script.__file = "packages/components/Bicycle.vue";

exports.default = script;
