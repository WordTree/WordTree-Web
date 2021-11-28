import { resolveComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, resolveDynamicComponent, createCommentVNode, toDisplayString, renderSlot, createElementBlock, Fragment, vShow, withModifiers, createVNode } from 'vue';

const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "el-notification__group" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  return openBlock(), createBlock(Transition, {
    name: "el-notification-fade",
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        id: _ctx.id,
        class: normalizeClass(["el-notification", _ctx.customClass, _ctx.horizontalClass]),
        style: normalizeStyle(_ctx.positionStyle),
        role: "alert",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.startTimer && _ctx.startTimer(...args)),
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        _ctx.iconComponent ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass(["el-notification__icon", _ctx.typeClass])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("h2", {
            class: "el-notification__title",
            textContent: toDisplayString(_ctx.title)
          }, null, 8, _hoisted_3),
          withDirectives(createElementVNode("div", {
            class: "el-notification__content",
            style: normalizeStyle(!!_ctx.title ? void 0 : { margin: 0 })
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromized, nerver use user's input as message "),
                createCommentVNode(" eslint-disable-next-line "),
                createElementVNode("p", { innerHTML: _ctx.message }, null, 8, _hoisted_5)
              ], 2112))
            ])
          ], 4), [
            [vShow, _ctx.message]
          ]),
          _ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: "el-notification__closeBtn",
            onClick: withModifiers(_ctx.close, ["stop"])
          }, {
            default: withCtx(() => [
              createVNode(_component_close)
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("v-if", true)
        ])
      ], 46, _hoisted_1), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["onBeforeLeave"]);
}

export { render };
//# sourceMappingURL=notification.vue_vue_type_template_id_d6b81f36_lang.mjs.map
