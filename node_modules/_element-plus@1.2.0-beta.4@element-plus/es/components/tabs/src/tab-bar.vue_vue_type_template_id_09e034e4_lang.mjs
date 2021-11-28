import { openBlock, createElementBlock, normalizeClass, normalizeStyle } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "bar$",
    class: normalizeClass(["el-tabs__active-bar", `is-${_ctx.rootTabs.props.tabPosition}`]),
    style: normalizeStyle(_ctx.barStyle)
  }, null, 6);
}

export { render };
//# sourceMappingURL=tab-bar.vue_vue_type_template_id_09e034e4_lang.mjs.map
