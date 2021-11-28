import { openBlock, createBlock, Teleport, createElementVNode, normalizeStyle, renderSlot, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.container ? (openBlock(), createBlock(Teleport, {
    key: 0,
    to: _ctx.container
  }, [
    createElementVNode("div", {
      ref: "containerRef",
      class: "el-teleport",
      style: normalizeStyle(_ctx.containerStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 8, ["to"])) : createCommentVNode("v-if", true);
}

export { render };
//# sourceMappingURL=teleport.vue_vue_type_template_id_787c6a36_lang.mjs.map
