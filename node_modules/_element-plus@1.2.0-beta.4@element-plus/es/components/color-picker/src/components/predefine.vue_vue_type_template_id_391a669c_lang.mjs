import { openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, normalizeStyle } from 'vue';

const _hoisted_1 = { class: "el-color-predefine" };
const _hoisted_2 = { class: "el-color-predefine__colors" };
const _hoisted_3 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rgbaColors, (item, index) => {
        return openBlock(), createElementBlock("div", {
          key: _ctx.colors[index],
          class: normalizeClass(["el-color-predefine__color-selector", { selected: item.selected, "is-alpha": item._alpha < 100 }]),
          onClick: ($event) => _ctx.handleSelect(index)
        }, [
          createElementVNode("div", {
            style: normalizeStyle({ backgroundColor: item.value })
          }, null, 4)
        ], 10, _hoisted_3);
      }), 128))
    ])
  ]);
}

export { render };
//# sourceMappingURL=predefine.vue_vue_type_template_id_391a669c_lang.mjs.map
