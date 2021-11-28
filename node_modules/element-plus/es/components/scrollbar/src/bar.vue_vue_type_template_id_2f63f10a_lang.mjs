import { openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, vShow } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "el-scrollbar-fade" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        ref: "instance",
        class: normalizeClass(["el-scrollbar__bar", "is-" + _ctx.bar.key]),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.clickTrackHandler && _ctx.clickTrackHandler(...args))
      }, [
        createElementVNode("div", {
          ref: "thumb",
          class: "el-scrollbar__thumb",
          style: normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.clickThumbHandler && _ctx.clickThumbHandler(...args))
        }, null, 36)
      ], 34), [
        [vShow, _ctx.always || _ctx.visible]
      ])
    ]),
    _: 1
  });
}

export { render };
//# sourceMappingURL=bar.vue_vue_type_template_id_2f63f10a_lang.mjs.map
