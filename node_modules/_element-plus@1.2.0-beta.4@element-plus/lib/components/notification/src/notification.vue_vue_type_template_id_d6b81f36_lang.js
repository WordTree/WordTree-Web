'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "el-notification__group" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_close = vue.resolveComponent("close");
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: "el-notification-fade",
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createElementVNode("div", {
        id: _ctx.id,
        class: vue.normalizeClass(["el-notification", _ctx.customClass, _ctx.horizontalClass]),
        style: vue.normalizeStyle(_ctx.positionStyle),
        role: "alert",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.startTimer && _ctx.startTimer(...args)),
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        _ctx.iconComponent ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: vue.normalizeClass(["el-notification__icon", _ctx.typeClass])
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("div", _hoisted_2, [
          vue.createElementVNode("h2", {
            class: "el-notification__title",
            textContent: vue.toDisplayString(_ctx.title)
          }, null, 8, _hoisted_3),
          vue.withDirectives(vue.createElementVNode("div", {
            class: "el-notification__content",
            style: vue.normalizeStyle(!!_ctx.title ? void 0 : { margin: 0 })
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_4, vue.toDisplayString(_ctx.message), 1)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createCommentVNode(" Caution here, message could've been compromized, nerver use user's input as message "),
                vue.createCommentVNode(" eslint-disable-next-line "),
                vue.createElementVNode("p", { innerHTML: _ctx.message }, null, 8, _hoisted_5)
              ], 2112))
            ])
          ], 4), [
            [vue.vShow, _ctx.message]
          ]),
          _ctx.showClose ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            class: "el-notification__closeBtn",
            onClick: vue.withModifiers(_ctx.close, ["stop"])
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_close)
            ]),
            _: 1
          }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
        ])
      ], 46, _hoisted_1), [
        [vue.vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["onBeforeLeave"]);
}

exports.render = render;
//# sourceMappingURL=notification.vue_vue_type_template_id_d6b81f36_lang.js.map
