import { withDirectives, openBlock, createElementBlock, normalizeClass, normalizeStyle, vShow, createCommentVNode, renderSlot } from 'vue';

const _hoisted_1 = {
  key: 0,
  class: "el-carousel__mask"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-carousel__item", {
      "is-active": _ctx.data.active,
      "el-carousel__item--card": _ctx.type === "card",
      "is-in-stage": _ctx.data.inStage,
      "is-hover": _ctx.data.hover,
      "is-animating": _ctx.data.animating
    }]),
    style: normalizeStyle(_ctx.itemStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleItemClick && _ctx.handleItemClick(...args))
  }, [
    _ctx.type === "card" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1, null, 512)), [
      [vShow, !_ctx.data.active]
    ]) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 6)), [
    [vShow, _ctx.data.ready]
  ]);
}

export { render };
//# sourceMappingURL=item.vue_vue_type_template_id_3d2e4fb8_lang.mjs.map
