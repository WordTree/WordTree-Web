import { resolveComponent, openBlock, createElementBlock, createVNode, withCtx, renderSlot, createElementVNode, normalizeClass, createBlock } from 'vue';

const _hoisted_1 = { class: "el-dropdown" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  const _component_el_popper = resolveComponent("el-popper");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_popper, {
      ref: "triggerVnode",
      visible: _ctx.visible,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.visible = $event),
      placement: _ctx.placement,
      "fallback-placements": ["bottom", "top", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      "manual-mode": true,
      trigger: [_ctx.trigger],
      "popper-class": "el-dropdown__popper",
      "append-to-body": "",
      transition: "el-zoom-in-top",
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false
    }, {
      default: withCtx(() => [
        createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          tag: "ul",
          "wrap-style": _ctx.wrapStyle,
          "view-class": "el-dropdown__list"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "dropdown")
          ]),
          _: 3
        }, 8, ["wrap-style"])
      ]),
      trigger: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass([_ctx.dropdownSize ? "el-dropdown--" + _ctx.dropdownSize : ""])
        }, [
          !_ctx.splitButton ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_el_button_group, { key: 1 }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                size: _ctx.dropdownSize,
                type: _ctx.type,
                onClick: _ctx.handlerMainButtonClick
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["size", "type", "onClick"]),
              createVNode(_component_el_button, {
                size: _ctx.dropdownSize,
                type: _ctx.type,
                class: "el-dropdown__caret-button"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_icon, { class: "el-dropdown__icon" }, {
                    default: withCtx(() => [
                      createVNode(_component_arrow_down)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["size", "type"])
            ]),
            _: 3
          }))
        ], 2)
      ]),
      _: 3
    }, 8, ["visible", "placement", "effect", "trigger"])
  ]);
}

export { render };
//# sourceMappingURL=dropdown.vue_vue_type_template_id_3ed790a5_lang.mjs.map
