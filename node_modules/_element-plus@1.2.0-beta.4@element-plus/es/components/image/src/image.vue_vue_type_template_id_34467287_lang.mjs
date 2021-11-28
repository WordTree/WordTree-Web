import { createElementVNode, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, toDisplayString, mergeProps, createBlock, Teleport, Fragment, withCtx, createCommentVNode } from 'vue';

const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "el-image__placeholder" }, null, -1);
const _hoisted_2 = { class: "el-image__error" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = resolveComponent("image-viewer");
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass(["el-image", _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      _hoisted_1
    ]) : _ctx.hasLoadError ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      createElementVNode("div", _hoisted_2, toDisplayString(_ctx.t("el.image.error")), 1)
    ]) : (openBlock(), createElementBlock("img", mergeProps({
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
    (openBlock(), createBlock(Teleport, {
      to: "body",
      disabled: !_ctx.appendToBody
    }, [
      _ctx.preview ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showViewer ? (openBlock(), createBlock(_component_image_viewer, {
          key: 0,
          "z-index": _ctx.zIndex,
          "initial-index": _ctx.imageIndex,
          "url-list": _ctx.previewSrcList,
          "hide-on-click-modal": _ctx.hideOnClickModal,
          onClose: _ctx.closeViewer,
          onSwitch: _ctx.switchViewer
        }, {
          default: withCtx(() => [
            _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "viewer")
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "onClose", "onSwitch"])) : createCommentVNode("v-if", true)
      ], 2112)) : createCommentVNode("v-if", true)
    ], 8, ["disabled"]))
  ], 6);
}

export { render };
//# sourceMappingURL=image.vue_vue_type_template_id_34467287_lang.mjs.map
