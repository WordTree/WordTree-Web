import { openBlock, createElementBlock, normalizeClass, withModifiers, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({
      "el-upload-dragger": true,
      "is-dragover": _ctx.dragover
    }),
    onDrop: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onDrop && _ctx.onDrop(...args), ["prevent"])),
    onDragover: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.onDragover && _ctx.onDragover(...args), ["prevent"])),
    onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.dragover = false, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 34);
}

export { render };
//# sourceMappingURL=upload-dragger.vue_vue_type_template_id_4f8ef690_lang.mjs.map
