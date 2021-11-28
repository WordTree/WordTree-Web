import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createBlock, withCtx, createVNode, createCommentVNode, Transition, createElementVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = resolveComponent("close");
  const _component_el_icon = resolveComponent("el-icon");
  return !_ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle({ backgroundColor: _ctx.color }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (openBlock(), createBlock(_component_el_icon, {
      key: 0,
      class: "el-tag__close",
      onClick: _ctx.handleClose
    }, {
      default: withCtx(() => [
        createVNode(_component_close)
      ]),
      _: 1
    }, 8, ["onClick"])) : createCommentVNode("v-if", true)
  ], 6)) : (openBlock(), createBlock(Transition, {
    key: 1,
    name: "el-zoom-in-center"
  }, {
    default: withCtx(() => [
      createElementVNode("span", {
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: "el-tag__close",
          onClick: _ctx.handleClose
        }, {
          default: withCtx(() => [
            createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true)
      ], 6)
    ]),
    _: 3
  }));
}

export { render };
//# sourceMappingURL=tag.vue_vue_type_template_id_525996c5_lang.mjs.map
