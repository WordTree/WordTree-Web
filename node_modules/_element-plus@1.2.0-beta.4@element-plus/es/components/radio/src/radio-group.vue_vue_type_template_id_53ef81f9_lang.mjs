import { openBlock, createElementBlock, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "radioGroupRef",
    class: "el-radio-group",
    role: "radiogroup",
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 544);
}

export { render };
//# sourceMappingURL=radio-group.vue_vue_type_template_id_53ef81f9_lang.mjs.map
