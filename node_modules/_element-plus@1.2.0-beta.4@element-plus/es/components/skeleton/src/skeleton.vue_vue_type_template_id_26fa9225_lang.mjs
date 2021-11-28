import { resolveComponent, openBlock, createElementBlock, mergeProps, Fragment, renderList, renderSlot, createVNode, createBlock, normalizeClass, createCommentVNode, normalizeProps } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
  return _ctx.uiLoading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    class: ["el-skeleton", _ctx.animated ? "is-animated" : ""]
  }, _ctx.$attrs), [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
      return openBlock(), createElementBlock(Fragment, { key: i }, [
        _ctx.loading ? renderSlot(_ctx.$slots, "template", { key: i }, () => [
          createVNode(_component_el_skeleton_item, {
            class: "is-first",
            variant: "p"
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
            return openBlock(), createBlock(_component_el_skeleton_item, {
              key: item,
              class: normalizeClass({
                "el-skeleton__paragraph": true,
                "is-last": item === _ctx.rows && _ctx.rows > 1
              }),
              variant: "p"
            }, null, 8, ["class"]);
          }), 128))
        ]) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
}

export { render };
//# sourceMappingURL=skeleton.vue_vue_type_template_id_26fa9225_lang.mjs.map
