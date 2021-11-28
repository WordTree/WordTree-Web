'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = { class: "el-color-predefine" };
const _hoisted_2 = { class: "el-color-predefine__colors" };
const _hoisted_3 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rgbaColors, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          key: _ctx.colors[index],
          class: vue.normalizeClass(["el-color-predefine__color-selector", { selected: item.selected, "is-alpha": item._alpha < 100 }]),
          onClick: ($event) => _ctx.handleSelect(index)
        }, [
          vue.createElementVNode("div", {
            style: vue.normalizeStyle({ backgroundColor: item.value })
          }, null, 4)
        ], 10, _hoisted_3);
      }), 128))
    ])
  ]);
}

exports.render = render;
//# sourceMappingURL=predefine.vue_vue_type_template_id_391a669c_lang.js.map
