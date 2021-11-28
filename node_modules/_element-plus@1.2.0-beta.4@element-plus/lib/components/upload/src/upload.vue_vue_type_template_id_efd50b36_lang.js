'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["name", "multiple", "accept"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_upload_dragger = vue.resolveComponent("upload-dragger");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-upload", `el-upload--${_ctx.listType}`]),
    tabindex: "0",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onKeydown: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"]), ["enter", "space"]))
  }, [
    _ctx.drag ? (vue.openBlock(), vue.createBlock(_component_upload_dragger, {
      key: 0,
      disabled: _ctx.disabled,
      onFile: _ctx.uploadFiles
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled", "onFile"])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }),
    vue.createElementVNode("input", {
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

exports.render = render;
//# sourceMappingURL=upload.vue_vue_type_template_id_efd50b36_lang.js.map
