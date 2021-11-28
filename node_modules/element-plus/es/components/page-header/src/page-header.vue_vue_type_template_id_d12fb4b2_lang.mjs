import { resolveComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString } from 'vue';

const _hoisted_1 = { class: "el-page-header" };
const _hoisted_2 = {
  key: 0,
  class: "el-page-header__icon"
};
const _hoisted_3 = { class: "el-page-header__title" };
const _hoisted_4 = { class: "el-page-header__content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "el-page-header__left",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      _ctx.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "icon", {}, () => [
          _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true)
        ])
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title || _ctx.t("el.pageHeader.title")), 1)
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "content", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ])
  ]);
}

export { render };
//# sourceMappingURL=page-header.vue_vue_type_template_id_d12fb4b2_lang.mjs.map
