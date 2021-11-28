'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["src", "alt", "srcset"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("span", {
    class: vue.normalizeClass(_ctx.avatarClass),
    style: vue.normalizeStyle(_ctx.sizeStyle)
  }, [
    (_ctx.src || _ctx.srcSet) && !_ctx.hasLoadError ? (vue.openBlock(), vue.createElementBlock("img", {
      key: 0,
      src: _ctx.src,
      alt: _ctx.alt,
      srcset: _ctx.srcSet,
      style: vue.normalizeStyle(_ctx.fitStyle),
      onError: _cache[0] || (_cache[0] = (...args) => _ctx.handleError && _ctx.handleError(...args))
    }, null, 44, _hoisted_1)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 1 }, {
      default: vue.withCtx(() => [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : vue.renderSlot(_ctx.$slots, "default", { key: 2 })
  ], 6);
}

exports.render = render;
//# sourceMappingURL=avatar.vue_vue_type_template_id_46e3f365_lang.js.map
