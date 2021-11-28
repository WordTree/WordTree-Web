import { resolveComponent, openBlock, createElementBlock, normalizeStyle, normalizeClass, createCommentVNode, createElementVNode, renderSlot, createBlock, withCtx, resolveDynamicComponent, toDisplayString, createTextVNode } from 'vue';

const _hoisted_1 = { class: "el-step__line" };
const _hoisted_2 = {
  key: 1,
  class: "el-step__icon-inner"
};
const _hoisted_3 = { class: "el-step__main" };
const _hoisted_4 = {
  key: 0,
  class: "el-step__arrow"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_check = resolveComponent("check");
  const _component_close = resolveComponent("close");
  return openBlock(), createElementBlock("div", {
    style: normalizeStyle(_ctx.style),
    class: normalizeClass([
      "el-step",
      _ctx.isSimple ? "is-simple" : `is-${_ctx.parent.props.direction}`,
      _ctx.isLast && !_ctx.space && !_ctx.isCenter && "is-flex",
      _ctx.isCenter && !_ctx.isVertical && !_ctx.isSimple && "is-center"
    ])
  }, [
    createCommentVNode(" icon & line "),
    createElementVNode("div", {
      class: normalizeClass(["el-step__head", `is-${_ctx.currentStatus}`])
    }, [
      createElementVNode("div", _hoisted_1, [
        createElementVNode("i", {
          class: "el-step__line-inner",
          style: normalizeStyle(_ctx.lineStyle)
        }, null, 4)
      ]),
      createElementVNode("div", {
        class: normalizeClass(["el-step__icon", `is-${_ctx.icon ? "icon" : "text"}`])
      }, [
        _ctx.currentStatus !== "success" && _ctx.currentStatus !== "error" ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
          _ctx.icon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: "el-step__icon-inner"
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.icon && !_ctx.isSimple ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.index + 1), 1)) : createCommentVNode("v-if", true)
        ]) : (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: "el-step__icon-inner is-status"
        }, {
          default: withCtx(() => [
            _ctx.currentStatus === "success" ? (openBlock(), createBlock(_component_check, { key: 0 })) : (openBlock(), createBlock(_component_close, { key: 1 }))
          ]),
          _: 1
        }))
      ], 2)
    ], 2),
    createCommentVNode(" title & description "),
    createElementVNode("div", _hoisted_3, [
      createElementVNode("div", {
        class: normalizeClass(["el-step__title", `is-${_ctx.currentStatus}`])
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ], 2),
      _ctx.isSimple ? (openBlock(), createElementBlock("div", _hoisted_4)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["el-step__description", `is-${_ctx.currentStatus}`])
      }, [
        renderSlot(_ctx.$slots, "description", {}, () => [
          createTextVNode(toDisplayString(_ctx.description), 1)
        ])
      ], 2))
    ])
  ], 6);
}

export { render };
//# sourceMappingURL=item.vue_vue_type_template_id_6ec47f4b_lang.mjs.map
