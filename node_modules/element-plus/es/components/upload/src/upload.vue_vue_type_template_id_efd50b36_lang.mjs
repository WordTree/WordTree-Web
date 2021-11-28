import { resolveComponent, openBlock, createElementBlock, normalizeClass, withKeys, withModifiers, createBlock, withCtx, renderSlot, createElementVNode } from 'vue';

const _hoisted_1 = ["name", "multiple", "accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_upload_dragger = resolveComponent("upload-dragger");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-upload", `el-upload--${_ctx.listType}`]),
    tabindex: "0",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"]), ["enter", "space"]))
  }, [
    _ctx.drag ? (openBlock(), createBlock(_component_upload_dragger, {
      key: 0,
      disabled: _ctx.disabled,
      onFile: _ctx.uploadFiles
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled", "onFile"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
    createElementVNode("input", {
      ref: "inputRef",
      class: "el-upload__input",
      type: "file",
      name: _ctx.name,
      multiple: _ctx.multiple,
      accept: _ctx.accept,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
    }, null, 40, _hoisted_1)
  ], 34);
}

export { render };
//# sourceMappingURL=upload.vue_vue_type_template_id_efd50b36_lang.mjs.map
