import { resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, createBlock, withCtx, resolveDynamicComponent, toDisplayString } from 'vue';

const _hoisted_1 = { class: "el-breadcrumb__item" };
const _hoisted_2 = {
  key: 1,
  class: "el-breadcrumb__separator",
  role: "presentation"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("span", _hoisted_1, [
    createElementVNode("span", {
      ref: "link",
      class: normalizeClass(["el-breadcrumb__inner", _ctx.to ? "is-link" : ""]),
      role: "link"
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.separatorIcon ? (openBlock(), createBlock(_component_el_icon, {
      key: 0,
      class: "el-breadcrumb__separator"
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.separatorIcon)))
      ]),
      _: 1
    })) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.separator), 1))
  ]);
}

export { render };
//# sourceMappingURL=breadcrumb-item.vue_vue_type_template_id_2f37792a_lang.mjs.map
