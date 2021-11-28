import { resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, createCommentVNode, createElementVNode, normalizeStyle, createVNode, Fragment, renderList } from 'vue';

const _hoisted_1 = ["aria-valuemin", "aria-valuemax", "aria-orientation", "aria-disabled"];
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "el-slider__marks" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_slider_button = resolveComponent("slider-button");
  const _component_slider_marker = resolveComponent("slider-marker");
  return openBlock(), createElementBlock("div", {
    ref: "sliderWrapper",
    class: normalizeClass(["el-slider", { "is-vertical": _ctx.vertical, "el-slider--with-input": _ctx.showInput }]),
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
    "aria-disabled": _ctx.sliderDisabled
  }, [
    _ctx.showInput && !_ctx.range ? (openBlock(), createBlock(_component_el_input_number, {
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
    }, null, 8, ["model-value", "step", "disabled", "controls", "min", "max", "debounce", "size", "onUpdate:modelValue", "onChange"])) : createCommentVNode("v-if", true),
    createElementVNode("div", {
      ref: "slider",
      class: normalizeClass(["el-slider__runway", { "show-input": _ctx.showInput && !_ctx.range, disabled: _ctx.sliderDisabled }]),
      style: normalizeStyle(_ctx.runwayStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onSliderClick && _ctx.onSliderClick(...args))
    }, [
      createElementVNode("div", {
        class: "el-slider__bar",
        style: normalizeStyle(_ctx.barStyle)
      }, null, 4),
      createVNode(_component_slider_button, {
        ref: "firstButton",
        "model-value": _ctx.firstValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setFirstValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"]),
      _ctx.range ? (openBlock(), createBlock(_component_slider_button, {
        key: 0,
        ref: "secondButton",
        "model-value": _ctx.secondValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setSecondValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"])) : createCommentVNode("v-if", true),
      _ctx.showStops ? (openBlock(), createElementBlock("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stops, (item, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: "el-slider__stop",
            style: normalizeStyle(_ctx.getStopStyle(item))
          }, null, 4);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      _ctx.markList.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        createElementVNode("div", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.markList, (item, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              style: normalizeStyle(_ctx.getStopStyle(item.position)),
              class: "el-slider__stop el-slider__marks-stop"
            }, null, 4);
          }), 128))
        ]),
        createElementVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.markList, (item, key) => {
            return openBlock(), createBlock(_component_slider_marker, {
              key,
              mark: item.mark,
              style: normalizeStyle(_ctx.getStopStyle(item.position))
            }, null, 8, ["mark", "style"]);
          }), 128))
        ])
      ], 64)) : createCommentVNode("v-if", true)
    ], 6)
  ], 10, _hoisted_1);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_24c42d04_lang.mjs.map
