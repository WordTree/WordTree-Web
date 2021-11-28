'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass({
      "el-upload-dragger": true,
      "is-dragover": _ctx.dragover
    }),
    onDrop: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.onDrop && _ctx.onDrop(...args), ["prevent"])),
    onDragover: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.onDragover && _ctx.onDragover(...args), ["prevent"])),
    onDragleave: _cache[2] || (_cache[2] = vue.withModifiers(($event) => _ctx.dragover = false, ["prevent"]))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 34);
}

exports.render = render;
//# sourceMappingURL=upload-dragger.vue_vue_type_template_id_4f8ef690_lang.js.map
