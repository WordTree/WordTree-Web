import { resolveComponent, openBlock, createElementBlock, toDisplayString, createBlock, withCtx, createVNode } from 'vue';

const _hoisted_1 = ["disabled", "aria-disabled"];
const _hoisted_2 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("button", {
    type: "button",
    class: "btn-prev",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }, [
    _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        createVNode(_component_arrow_left)
      ]),
      _: 1
    }))
  ], 8, _hoisted_1);
}

export { render };
//# sourceMappingURL=prev.vue_vue_type_template_id_15259d71_lang.mjs.map
