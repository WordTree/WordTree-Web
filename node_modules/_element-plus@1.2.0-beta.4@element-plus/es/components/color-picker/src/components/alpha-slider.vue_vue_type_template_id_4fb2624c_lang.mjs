import { openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-color-alpha-slider", { "is-vertical": _ctx.vertical }])
  }, [
    createElementVNode("div", {
      ref: "bar",
      class: "el-color-alpha-slider__bar",
      style: normalizeStyle({
        background: _ctx.background
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, null, 4),
    createElementVNode("div", {
      ref: "thumb",
      class: "el-color-alpha-slider__thumb",
      style: normalizeStyle({
        left: _ctx.thumbLeft + "px",
        top: _ctx.thumbTop + "px"
      })
    }, null, 4)
  ], 2);
}

export { render };
//# sourceMappingURL=alpha-slider.vue_vue_type_template_id_4fb2624c_lang.mjs.map
