import { resolveComponent, openBlock, createBlock, Transition, withCtx, createElementBlock, createElementVNode, normalizeClass, createVNode, toDisplayString, createCommentVNode } from 'vue';

const _hoisted_1 = {
  key: 0,
  class: "el-time-panel"
};
const _hoisted_2 = { class: "el-time-panel__footer" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_spinner = resolveComponent("time-spinner");
  return openBlock(), createBlock(Transition, { name: _ctx.transitionName }, {
    default: withCtx(() => [
      _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: normalizeClass(["el-time-panel__content", { "has-seconds": _ctx.showSeconds }])
        }, [
          createVNode(_component_time_spinner, {
            ref: "spinner",
            role: _ctx.datetimeRole || "start",
            "arrow-control": _ctx.arrowControl,
            "show-seconds": _ctx.showSeconds,
            "am-pm-mode": _ctx.amPmMode,
            "spinner-date": _ctx.parsedValue,
            "disabled-hours": _ctx.disabledHours,
            "disabled-minutes": _ctx.disabledMinutes,
            "disabled-seconds": _ctx.disabledSeconds,
            onChange: _ctx.handleChange,
            onSetOption: _ctx.onSetOption,
            onSelectRange: _ctx.setSelectionRange
          }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("button", {
            type: "button",
            class: "el-time-panel__btn cancel",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancel && _ctx.handleCancel(...args))
          }, toDisplayString(_ctx.t("el.datepicker.cancel")), 1),
          createElementVNode("button", {
            type: "button",
            class: "el-time-panel__btn confirm",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleConfirm())
          }, toDisplayString(_ctx.t("el.datepicker.confirm")), 1)
        ])
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["name"]);
}

export { render };
//# sourceMappingURL=panel-time-pick.vue_vue_type_template_id_3b3cfa6a_lang.mjs.map
