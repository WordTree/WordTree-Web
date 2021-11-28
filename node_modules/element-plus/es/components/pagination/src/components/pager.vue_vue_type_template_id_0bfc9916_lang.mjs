import { resolveComponent, openBlock, createElementBlock, withKeys, normalizeClass, createCommentVNode, createBlock, Fragment, renderList, toDisplayString } from 'vue';

const _hoisted_1 = ["aria-current"];
const _hoisted_2 = ["aria-current"];
const _hoisted_3 = ["aria-current"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_d_arrow_left = resolveComponent("d-arrow-left");
  const _component_more_filled = resolveComponent("more-filled");
  const _component_d_arrow_right = resolveComponent("d-arrow-right");
  return openBlock(), createElementBlock("ul", {
    class: "el-pager",
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onPagerClick && _ctx.onPagerClick(...args)),
    onKeyup: _cache[5] || (_cache[5] = withKeys((...args) => _ctx.onEnter && _ctx.onEnter(...args), ["enter"]))
  }, [
    _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
      key: 0,
      class: normalizeClass([{ active: _ctx.currentPage === 1, disabled: _ctx.disabled }, "number"]),
      "aria-current": _ctx.currentPage === 1,
      tabindex: "0"
    }, " 1 ", 10, _hoisted_1)) : createCommentVNode("v-if", true),
    _ctx.showPrevMore ? (openBlock(), createElementBlock("li", {
      key: 1,
      class: normalizeClass(["el-icon more btn-quickprev", { disabled: _ctx.disabled }]),
      onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.onMouseenter("left")),
      onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.quickPrevHover = false)
    }, [
      _ctx.quickPrevHover ? (openBlock(), createBlock(_component_d_arrow_left, { key: 0 })) : (openBlock(), createBlock(_component_more_filled, { key: 1 }))
    ], 34)) : createCommentVNode("v-if", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pagers, (pager) => {
      return openBlock(), createElementBlock("li", {
        key: pager,
        class: normalizeClass([{ active: _ctx.currentPage === pager, disabled: _ctx.disabled }, "number"]),
        "aria-current": _ctx.currentPage === pager,
        tabindex: "0"
      }, toDisplayString(pager), 11, _hoisted_2);
    }), 128)),
    _ctx.showNextMore ? (openBlock(), createElementBlock("li", {
      key: 2,
      class: normalizeClass(["el-icon more btn-quicknext", { disabled: _ctx.disabled }]),
      onMouseenter: _cache[2] || (_cache[2] = ($event) => _ctx.onMouseenter("right")),
      onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.quickNextHover = false)
    }, [
      _ctx.quickNextHover ? (openBlock(), createBlock(_component_d_arrow_right, { key: 0 })) : (openBlock(), createBlock(_component_more_filled, { key: 1 }))
    ], 34)) : createCommentVNode("v-if", true),
    _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
      key: 3,
      class: normalizeClass([{ active: _ctx.currentPage === _ctx.pageCount, disabled: _ctx.disabled }, "number"]),
      "aria-current": _ctx.currentPage === _ctx.pageCount,
      tabindex: "0"
    }, toDisplayString(_ctx.pageCount), 11, _hoisted_3)) : createCommentVNode("v-if", true)
  ], 32);
}

export { render };
//# sourceMappingURL=pager.vue_vue_type_template_id_0bfc9916_lang.mjs.map
