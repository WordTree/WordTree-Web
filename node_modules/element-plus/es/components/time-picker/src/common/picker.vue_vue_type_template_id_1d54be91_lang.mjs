import { resolveComponent, resolveDirective, openBlock, createBlock, mergeProps, withCtx, withDirectives, normalizeClass, resolveDynamicComponent, createCommentVNode, createElementBlock, createElementVNode, renderSlot, toDisplayString, withModifiers } from 'vue';

const _hoisted_1 = ["name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2 = { class: "el-range-separator" };
const _hoisted_3 = ["name", "placeholder", "value", "disabled", "readonly"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_popper = resolveComponent("el-popper");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_popper, mergeProps({
    ref: "refPopper",
    visible: _ctx.pickerVisible,
    "onUpdate:visible": _cache[15] || (_cache[15] = ($event) => _ctx.pickerVisible = $event),
    "manual-mode": "",
    effect: _ctx.Effect.LIGHT,
    pure: "",
    trigger: "click"
  }, _ctx.$attrs, {
    "popper-class": `el-picker__popper ${_ctx.popperClass}`,
    "popper-options": _ctx.elPopperOptions,
    "fallback-placements": ["bottom", "top", "right", "left"],
    transition: "el-zoom-in-top",
    "gpu-acceleration": false,
    "stop-popper-mouse-event": false,
    "append-to-body": "",
    onBeforeEnter: _cache[16] || (_cache[16] = ($event) => _ctx.pickerActualVisible = true),
    onAfterLeave: _cache[17] || (_cache[17] = ($event) => _ctx.pickerActualVisible = false)
  }), {
    trigger: withCtx(() => [
      !_ctx.isRangeInput ? withDirectives((openBlock(), createBlock(_component_el_input, {
        key: 0,
        "model-value": _ctx.displayValue,
        name: _ctx.name,
        size: _ctx.pickerSize,
        disabled: _ctx.pickerDisabled,
        placeholder: _ctx.placeholder,
        class: normalizeClass(["el-date-editor", "el-date-editor--" + _ctx.type]),
        readonly: !_ctx.editable || _ctx.readonly || _ctx.isDatesPicker || _ctx.type === "week",
        onInput: _ctx.onUserInput,
        onFocus: _ctx.handleFocus,
        onKeydown: _ctx.handleKeydown,
        onChange: _ctx.handleChange,
        onMouseenter: _ctx.onMouseEnter,
        onMouseleave: _ctx.onMouseLeave
      }, {
        prefix: withCtx(() => [
          _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: "el-input__icon",
            onClick: _ctx.handleFocus
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("v-if", true)
        ]),
        suffix: withCtx(() => [
          _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: "el-input__icon clear-icon",
            onClick: _ctx.onClearIconClick
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["model-value", "name", "size", "disabled", "placeholder", "class", "readonly", "onInput", "onFocus", "onKeydown", "onChange", "onMouseenter", "onMouseleave"])), [
        [_directive_clickoutside, _ctx.onClickOutside, _ctx.popperPaneRef]
      ]) : withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["el-date-editor el-range-editor el-input__inner", [
          "el-date-editor--" + _ctx.type,
          _ctx.pickerSize ? `el-range-editor--${_ctx.pickerSize}` : "",
          _ctx.pickerDisabled ? "is-disabled" : "",
          _ctx.pickerVisible ? "is-active" : ""
        ]]),
        onClick: _cache[6] || (_cache[6] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onMouseenter: _cache[7] || (_cache[7] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
        onMouseleave: _cache[8] || (_cache[8] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
        onKeydown: _cache[9] || (_cache[9] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }, [
        _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: "el-input__icon el-range__icon",
          onClick: _ctx.handleFocus
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true),
        createElementVNode("input", {
          autocomplete: "off",
          name: _ctx.name && _ctx.name[0],
          placeholder: _ctx.startPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[0],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: "el-range-input",
          onInput: _cache[0] || (_cache[0] = (...args) => _ctx.handleStartInput && _ctx.handleStartInput(...args)),
          onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleStartChange && _ctx.handleStartChange(...args)),
          onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args))
        }, null, 40, _hoisted_1),
        renderSlot(_ctx.$slots, "range-separator", {}, () => [
          createElementVNode("span", _hoisted_2, toDisplayString(_ctx.rangeSeparator), 1)
        ]),
        createElementVNode("input", {
          autocomplete: "off",
          name: _ctx.name && _ctx.name[1],
          placeholder: _ctx.endPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[1],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: "el-range-input",
          onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
          onInput: _cache[4] || (_cache[4] = (...args) => _ctx.handleEndInput && _ctx.handleEndInput(...args)),
          onChange: _cache[5] || (_cache[5] = (...args) => _ctx.handleEndChange && _ctx.handleEndChange(...args))
        }, null, 40, _hoisted_3),
        _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass(["el-input__icon el-range__close-icon", {
            "el-range__close-icon--hidden": !_ctx.showClose
          }]),
          onClick: _ctx.onClearIconClick
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 34)), [
        [_directive_clickoutside, _ctx.onClickOutside, _ctx.popperPaneRef]
      ])
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        visible: _ctx.pickerVisible,
        actualVisible: _ctx.pickerActualVisible,
        parsedValue: _ctx.parsedValue,
        format: _ctx.format,
        unlinkPanels: _ctx.unlinkPanels,
        type: _ctx.type,
        defaultValue: _ctx.defaultValue,
        onPick: _cache[10] || (_cache[10] = (...args) => _ctx.onPick && _ctx.onPick(...args)),
        onSelectRange: _cache[11] || (_cache[11] = (...args) => _ctx.setSelectionRange && _ctx.setSelectionRange(...args)),
        onSetPickerOption: _cache[12] || (_cache[12] = (...args) => _ctx.onSetPickerOption && _ctx.onSetPickerOption(...args)),
        onCalendarChange: _cache[13] || (_cache[13] = (...args) => _ctx.onCalendarChange && _ctx.onCalendarChange(...args)),
        onMousedown: _cache[14] || (_cache[14] = withModifiers(() => {
        }, ["stop"]))
      })
    ]),
    _: 3
  }, 16, ["visible", "effect", "popper-class", "popper-options"]);
}

export { render };
//# sourceMappingURL=picker.vue_vue_type_template_id_1d54be91_lang.mjs.map
