'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "el-image__placeholder" }, null, -1);
const _hoisted_2 = { class: "el-image__error" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = vue.resolveComponent("image-viewer");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "container",
    class: vue.normalizeClass(["el-image", _ctx.$attrs.class]),
    style: vue.normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? vue.renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      _hoisted_1
    ]) : _ctx.hasLoadError ? vue.renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(_ctx.t("el.image.error")), 1)
    ]) : (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({
      key: 2,
      class: "el-image__inner"
    }, _ctx.attrs, {
      src: _ctx.src,
      style: _ctx.imageStyle,
      class: {
        "el-image__preview": _ctx.preview
      },
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
    }), null, 16, _hoisted_3)),
    (vue.openBlock(), vue.createBlock(vue.Teleport, {
      to: "body",
      disabled: !_ctx.appendToBody
    }, [
      _ctx.preview ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        _ctx.showViewer ? (vue.openBlock(), vue.createBlock(_component_image_viewer, {
          key: 0,
          "z-index": _ctx.zIndex,
          "initial-index": _ctx.imageIndex,
          "url-list": _ctx.previewSrcList,
          "hide-on-click-modal": _ctx.hideOnClickModal,
          onClose: _ctx.closeViewer,
          onSwitch: _ctx.switchViewer
        }, {
          default: vue.withCtx(() => [
            _ctx.$slots.viewer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "viewer")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "onClose", "onSwitch"])) : vue.createCommentVNode("v-if", true)
      ], 2112)) : vue.createCommentVNode("v-if", true)
    ], 8, ["disabled"]))
  ], 6);
}

exports.render = render;
//# sourceMappingURL=image.vue_vue_type_template_id_34467287_lang.js.map
