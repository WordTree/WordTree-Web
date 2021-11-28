import { resolveComponent, openBlock, createElementBlock, createVNode, withCtx, renderSlot, createElementVNode, normalizeClass, toDisplayString, createCommentVNode } from 'vue';

const _hoisted_1 = { class: "el-transfer" };
const _hoisted_2 = { class: "el-transfer__buttons" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_transfer_panel = resolveComponent("transfer-panel");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_transfer_panel, {
      ref: "leftPanel",
      data: _ctx.sourceData,
      "option-render": _ctx.optionRender,
      placeholder: _ctx.panelFilterPlaceholder,
      title: _ctx.leftPanelTitle,
      filterable: _ctx.filterable,
      format: _ctx.format,
      "filter-method": _ctx.filterMethod,
      "default-checked": _ctx.leftDefaultChecked,
      props: _ctx.props,
      onCheckedChange: _ctx.onSourceCheckedChange
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "left-footer")
      ]),
      _: 3
    }, 8, ["data", "option-render", "placeholder", "title", "filterable", "format", "filter-method", "default-checked", "props", "onCheckedChange"]),
    createElementVNode("div", _hoisted_2, [
      createVNode(_component_el_button, {
        type: "primary",
        class: normalizeClass(["el-transfer__button", _ctx.hasButtonTexts ? "is-with-texts" : ""]),
        disabled: _ctx.rightChecked.length === 0,
        onClick: _ctx.addToLeft
      }, {
        default: withCtx(() => [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_arrow_left)
            ]),
            _: 1
          }),
          _ctx.buttonTexts[0] !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.buttonTexts[0]), 1)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["class", "disabled", "onClick"]),
      createVNode(_component_el_button, {
        type: "primary",
        class: normalizeClass(["el-transfer__button", _ctx.hasButtonTexts ? "is-with-texts" : ""]),
        disabled: _ctx.leftChecked.length === 0,
        onClick: _ctx.addToRight
      }, {
        default: withCtx(() => [
          _ctx.buttonTexts[1] !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.buttonTexts[1]), 1)) : createCommentVNode("v-if", true),
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_arrow_right)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "disabled", "onClick"])
    ]),
    createVNode(_component_transfer_panel, {
      ref: "rightPanel",
      data: _ctx.targetData,
      "option-render": _ctx.optionRender,
      placeholder: _ctx.panelFilterPlaceholder,
      filterable: _ctx.filterable,
      format: _ctx.format,
      "filter-method": _ctx.filterMethod,
      title: _ctx.rightPanelTitle,
      "default-checked": _ctx.rightDefaultChecked,
      props: _ctx.props,
      onCheckedChange: _ctx.onTargetCheckedChange
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "right-footer")
      ]),
      _: 3
    }, 8, ["data", "option-render", "placeholder", "filterable", "format", "filter-method", "title", "default-checked", "props", "onCheckedChange"])
  ]);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_6c8b9070_lang.mjs.map
