import { openBlock, createBlock, Transition, toHandlers, withCtx, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, toHandlers(_ctx.on), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}

export { render };
//# sourceMappingURL=collapse-transition.vue_vue_type_template_id_f68ae30a_lang.mjs.map
