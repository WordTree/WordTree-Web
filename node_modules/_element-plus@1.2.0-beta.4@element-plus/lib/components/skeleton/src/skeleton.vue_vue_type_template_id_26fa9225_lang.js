'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_skeleton_item = vue.resolveComponent("el-skeleton-item");
  return _ctx.uiLoading ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
    key: 0,
    class: ["el-skeleton", _ctx.animated ? "is-animated" : ""]
  }, _ctx.$attrs), [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.count, (i) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i }, [
        _ctx.loading ? vue.renderSlot(_ctx.$slots, "template", { key: i }, () => [
          vue.createVNode(_component_el_skeleton_item, {
            class: "is-first",
            variant: "p"
          }),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rows, (item) => {
            return vue.openBlock(), vue.createBlock(_component_el_skeleton_item, {
              key: item,
              class: vue.normalizeClass({
                "el-skeleton__paragraph": true,
                "is-last": item === _ctx.rows && _ctx.rows > 1
              }),
              variant: "p"
            }, null, 8, ["class"]);
          }), 128))
        ]) : vue.createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ], 16)) : vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$attrs)));
}

exports.render = render;
//# sourceMappingURL=skeleton.vue_vue_type_template_id_26fa9225_lang.js.map
