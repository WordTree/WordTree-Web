import { resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, createBlock, resolveDynamicComponent, withCtx, renderSlot, Fragment, createVNode, createCommentVNode } from 'vue';

const _hoisted_1 = {
  ref: "scrollbar$",
  class: "el-scrollbar"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bar = resolveComponent("bar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      ref: "wrap$",
      class: normalizeClass([
        _ctx.wrapClass,
        "el-scrollbar__wrap",
        _ctx.native ? "" : "el-scrollbar__wrap--hidden-default"
      ]),
      style: normalizeStyle(_ctx.style),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        ref: "resize$",
        class: normalizeClass(["el-scrollbar__view", _ctx.viewClass]),
        style: normalizeStyle(_ctx.viewStyle)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    !_ctx.native ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(_component_bar, {
        move: _ctx.moveX,
        ratio: _ctx.ratioX,
        size: _ctx.sizeWidth,
        always: _ctx.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      createVNode(_component_bar, {
        move: _ctx.moveY,
        ratio: _ctx.ratioY,
        size: _ctx.sizeHeight,
        vertical: "",
        always: _ctx.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64)) : createCommentVNode("v-if", true)
  ], 512);
}

export { render };
//# sourceMappingURL=scrollbar.vue_vue_type_template_id_303f965d_lang.mjs.map
