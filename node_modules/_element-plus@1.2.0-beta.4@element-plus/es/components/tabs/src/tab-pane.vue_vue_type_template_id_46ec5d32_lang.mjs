import { withDirectives, openBlock, createElementBlock, renderSlot, vShow, createCommentVNode } from 'vue';

const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.shouldBeRender ? withDirectives((openBlock(), createElementBlock("div", {
    key: 0,
    id: `pane-${_ctx.paneName}`,
    class: "el-tab-pane",
    role: "tabpanel",
    "aria-hidden": !_ctx.active,
    "aria-labelledby": `tab-${_ctx.paneName}`
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1)), [
    [vShow, _ctx.active]
  ]) : createCommentVNode("v-if", true);
}

export { render };
//# sourceMappingURL=tab-pane.vue_vue_type_template_id_46ec5d32_lang.mjs.map
