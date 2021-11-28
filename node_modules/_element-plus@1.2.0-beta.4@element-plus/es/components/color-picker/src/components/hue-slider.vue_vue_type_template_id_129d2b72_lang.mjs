import { openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-color-hue-slider", { "is-vertical": _ctx.vertical }])
  }, [
    createElementVNode("div", {
      ref: "bar",
      class: "el-color-hue-slider__bar",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, null, 512),
    createElementVNode("div", {
      ref: "thumb",
      class: "el-color-hue-slider__thumb",
      style: normalizeStyle({
        left: _ctx.thumbLeft + "px",
        top: _ctx.thumbTop + "px"
      })
    }, null, 4)
  ], 2);
}

export { render };
//# sourceMappingURL=hue-slider.vue_vue_type_template_id_129d2b72_lang.mjs.map
