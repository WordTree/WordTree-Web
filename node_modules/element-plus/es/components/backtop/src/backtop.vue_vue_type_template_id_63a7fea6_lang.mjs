import { resolveComponent, openBlock, createBlock, Transition, withCtx, createElementBlock, normalizeStyle, withModifiers, renderSlot, createVNode, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_caret_top = resolveComponent("caret-top");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createBlock(Transition, { name: "el-fade-in" }, {
    default: withCtx(() => [
      _ctx.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle({
          right: _ctx.styleRight,
          bottom: _ctx.styleBottom
        }),
        class: "el-backtop",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(_component_el_icon, { class: "el-backtop__icon" }, {
            default: withCtx(() => [
              createVNode(_component_caret_top)
            ]),
            _: 1
          })
        ])
      ], 4)) : createCommentVNode("v-if", true)
    ]),
    _: 3
  });
}

export { render };
//# sourceMappingURL=backtop.vue_vue_type_template_id_63a7fea6_lang.mjs.map
