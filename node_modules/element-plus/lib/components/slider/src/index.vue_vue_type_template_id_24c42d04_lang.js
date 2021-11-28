'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-valuemin", "aria-valuemax", "aria-orientation", "aria-disabled"];
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "el-slider__marks" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input_number = vue.resolveComponent("el-input-number");
  const _component_slider_button = vue.resolveComponent("slider-button");
  const _component_slider_marker = vue.resolveComponent("slider-marker");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "sliderWrapper",
    class: vue.normalizeClass(["el-slider", { "is-vertical": _ctx.vertical, "el-slider--with-input": _ctx.showInput }]),
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
    "aria-disabled": _ctx.sliderDisabled
  }, [
    _ctx.showInput && !_ctx.range ? (vue.openBlock(), vue.createBlock(_component_el_input_number, {
      key: 0,
      ref: "input",
      "model-value": _ctx.firstValue,
      class: "el-slider__input",
      step: _ctx.step,
      disabled: _ctx.sliderDisabled,
      controls: _ctx.showInputControls,
      min: _ctx.min,
      max: _ctx.max,
      debounce: _ctx.debounce,
      size: _ctx.inputSize,
      "onUpdate:modelValue": _ctx.setFirstValue,
      onChange: _ctx.emitChange
    }, null, 8, ["model-value", "step", "disabled", "controls", "min", "max", "debounce", "size", "onUpdate:modelValue", "onChange"])) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", {
      ref: "slider",
      class: vue.normalizeClass(["el-slider__runway", { "show-input": _ctx.showInput && !_ctx.range, disabled: _ctx.sliderDisabled }]),
      style: vue.normalizeStyle(_ctx.runwayStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onSliderClick && _ctx.onSliderClick(...args))
    }, [
      vue.createElementVNode("div", {
        class: "el-slider__bar",
        style: vue.normalizeStyle(_ctx.barStyle)
      }, null, 4),
      vue.createVNode(_component_slider_button, {
        ref: "firstButton",
        "model-value": _ctx.firstValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setFirstValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"]),
      _ctx.range ? (vue.openBlock(), vue.createBlock(_component_slider_button, {
        key: 0,
        ref: "secondButton",
        "model-value": _ctx.secondValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setSecondValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"])) : vue.createCommentVNode("v-if", true),
      _ctx.showStops ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.stops, (item, key) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key,
            class: "el-slider__stop",
            style: vue.normalizeStyle(_ctx.getStopStyle(item))
          }, null, 4);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.markList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
        vue.createElementVNode("div", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.markList, (item, key) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key,
              style: vue.normalizeStyle(_ctx.getStopStyle(item.position)),
              class: "el-slider__stop el-slider__marks-stop"
            }, null, 4);
          }), 128))
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.markList, (item, key) => {
            return vue.openBlock(), vue.createBlock(_component_slider_marker, {
              key,
              mark: item.mark,
              style: vue.normalizeStyle(_ctx.getStopStyle(item.position))
            }, null, 8, ["mark", "style"]);
          }), 128))
        ])
      ], 64)) : vue.createCommentVNode("v-if", true)
    ], 6)
  ], 10, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=index.vue_vue_type_template_id_24c42d04_lang.js.map
