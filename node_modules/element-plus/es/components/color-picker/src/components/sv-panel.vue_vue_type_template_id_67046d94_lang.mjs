import { createElementVNode, openBlock, createElementBlock, normalizeStyle } from 'vue';

const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "el-color-svpanel__white" }, null, -1);
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { class: "el-color-svpanel__black" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", null, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "el-color-svpanel",
    style: normalizeStyle({
      backgroundColor: _ctx.background
    })
  }, [
    _hoisted_1,
    _hoisted_2,
    createElementVNode("div", {
      class: "el-color-svpanel__cursor",
      style: normalizeStyle({
        top: _ctx.cursorTop + "px",
        left: _ctx.cursorLeft + "px"
      })
    }, _hoisted_4, 4)
  ], 4);
}

export { render };
//# sourceMappingURL=sv-panel.vue_vue_type_template_id_67046d94_lang.mjs.map
