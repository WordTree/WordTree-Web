'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["for"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelWrap = vue.resolveComponent("LabelWrap");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "formItemRef",
    class: vue.normalizeClass(["el-form-item", _ctx.formItemClass])
  }, [
    vue.createVNode(_component_LabelWrap, {
      "is-auto-width": _ctx.labelStyle.width === "auto",
      "update-all": _ctx.elForm.labelWidth === "auto"
    }, {
      default: vue.withCtx(() => [
        _ctx.label || _ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock("label", {
          key: 0,
          for: _ctx.labelFor,
          class: "el-form-item__label",
          style: vue.normalizeStyle(_ctx.labelStyle)
        }, [
          vue.renderSlot(_ctx.$slots, "label", { label: _ctx.currentLabel }, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.currentLabel), 1)
          ])
        ], 12, _hoisted_1)) : vue.createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["is-auto-width", "update-all"]),
    vue.createElementVNode("div", {
      class: "el-form-item__content",
      style: vue.normalizeStyle(_ctx.contentStyle)
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createVNode(vue.Transition, { name: "el-zoom-in-top" }, {
        default: vue.withCtx(() => [
          _ctx.shouldShowError ? vue.renderSlot(_ctx.$slots, "error", {
            key: 0,
            error: _ctx.validateMessage
          }, () => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["el-form-item__error", {
                "el-form-item__error--inline": typeof _ctx.inlineMessage === "boolean" ? _ctx.inlineMessage : _ctx.elForm.inlineMessage || false
              }])
            }, vue.toDisplayString(_ctx.validateMessage), 3)
          ]) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ], 4)
  ], 2);
}

exports.render = render;
//# sourceMappingURL=form-item.vue_vue_type_template_id_24eda48b_lang.js.map
