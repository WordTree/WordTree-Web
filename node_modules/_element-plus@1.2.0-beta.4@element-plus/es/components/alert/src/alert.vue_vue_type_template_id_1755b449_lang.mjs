import { resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, resolveDynamicComponent, createCommentVNode, createElementBlock, renderSlot, createTextVNode, toDisplayString, Fragment, createVNode, vShow } from 'vue';

const _hoisted_1 = { class: "el-alert__content" };
const _hoisted_2 = {
  key: 1,
  class: "el-alert__description"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  return openBlock(), createBlock(Transition, { name: "el-alert-fade" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(["el-alert", [_ctx.typeClass, _ctx.center ? "is-center" : "", "is-" + _ctx.effect]]),
        role: "alert"
      }, [
        _ctx.showIcon && _ctx.iconComponent ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass(["el-alert__icon", _ctx.isBigIcon])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_1, [
          _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["el-alert__title", [_ctx.isBoldTitle]])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2)) : createCommentVNode("v-if", true),
          _ctx.$slots.default || _ctx.description ? (openBlock(), createElementBlock("p", _hoisted_2, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ])
          ])) : createCommentVNode("v-if", true),
          _ctx.closable ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            _ctx.closeText ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "el-alert__closebtn is-customed",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
            }, toDisplayString(_ctx.closeText), 1)) : (openBlock(), createBlock(_component_el_icon, {
              key: 1,
              class: "el-alert__closebtn",
              onClick: _ctx.close
            }, {
              default: withCtx(() => [
                createVNode(_component_close)
              ]),
              _: 1
            }, 8, ["onClick"]))
          ], 2112)) : createCommentVNode("v-if", true)
        ])
      ], 2), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}

export { render };
//# sourceMappingURL=alert.vue_vue_type_template_id_1755b449_lang.mjs.map
