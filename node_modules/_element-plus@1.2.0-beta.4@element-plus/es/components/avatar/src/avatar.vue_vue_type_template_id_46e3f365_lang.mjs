import { resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, renderSlot } from 'vue';

const _hoisted_1 = ["src", "alt", "srcset"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.avatarClass),
    style: normalizeStyle(_ctx.sizeStyle)
  }, [
    (_ctx.src || _ctx.srcSet) && !_ctx.hasLoadError ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: _ctx.src,
      alt: _ctx.alt,
      srcset: _ctx.srcSet,
      style: normalizeStyle(_ctx.fitStyle),
      onError: _cache[0] || (_cache[0] = (...args) => _ctx.handleError && _ctx.handleError(...args))
    }, null, 44, _hoisted_1)) : _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : renderSlot(_ctx.$slots, "default", { key: 2 })
  ], 6);
}

export { render };
//# sourceMappingURL=avatar.vue_vue_type_template_id_46e3f365_lang.mjs.map
