'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["onKeydown"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "el-upload-list__item-status-label" };
const _hoisted_5 = {
  key: 2,
  class: "el-icon--close-tip"
};
const _hoisted_6 = {
  key: 4,
  class: "el-upload-list__item-actions"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_document = vue.resolveComponent("document");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_circle_check = vue.resolveComponent("circle-check");
  const _component_check = vue.resolveComponent("check");
  const _component_close = vue.resolveComponent("close");
  const _component_el_progress = vue.resolveComponent("el-progress");
  const _component_zoom_in = vue.resolveComponent("zoom-in");
  const _component_delete = vue.resolveComponent("delete");
  return vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
    tag: "ul",
    class: vue.normalizeClass([
      "el-upload-list",
      "el-upload-list--" + _ctx.listType,
      { "is-disabled": _ctx.disabled }
    ]),
    name: "el-list"
  }, {
    default: vue.withCtx(() => [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.files, (file) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          key: file.uid || file,
          class: vue.normalizeClass([
            "el-upload-list__item",
            "is-" + file.status,
            _ctx.focusing ? "focusing" : ""
          ]),
          tabindex: "0",
          onKeydown: vue.withKeys(($event) => !_ctx.disabled && _ctx.handleRemove($event, file), ["delete"]),
          onFocus: _cache[0] || (_cache[0] = ($event) => _ctx.focusing = true),
          onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.focusing = false),
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onFileClicked && _ctx.onFileClicked(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", { file }, () => [
            file.status !== "uploading" && ["picture-card", "picture"].includes(_ctx.listType) ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              class: "el-upload-list__item-thumbnail",
              src: file.url,
              alt: ""
            }, null, 8, _hoisted_2)) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("a", {
              class: "el-upload-list__item-name",
              onClick: ($event) => _ctx.handleClick(file)
            }, [
              vue.createVNode(_component_el_icon, { class: "el-icon--document" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_document)
                ]),
                _: 1
              }),
              vue.createTextVNode(" " + vue.toDisplayString(file.name), 1)
            ], 8, _hoisted_3),
            vue.createElementVNode("label", _hoisted_4, [
              _ctx.listType === "text" ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 0,
                class: "el-icon--upload-success el-icon--circle-check"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_circle_check)
                ]),
                _: 1
              })) : ["picture-card", "picture"].includes(_ctx.listType) ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                key: 1,
                class: "el-icon--upload-success el-icon--check"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_check)
                ]),
                _: 1
              })) : vue.createCommentVNode("v-if", true)
            ]),
            !_ctx.disabled ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 1,
              class: "el-icon--close",
              onClick: ($event) => _ctx.handleRemove($event, file)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_close)
              ]),
              _: 2
            }, 1032, ["onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),
            vue.createCommentVNode(" This is a bug which needs to be fixed "),
            vue.createCommentVNode(" TODO: Fix the incorrect navigation interaction "),
            !_ctx.disabled ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_5, vue.toDisplayString(_ctx.t("el.upload.deleteTip")), 1)) : vue.createCommentVNode("v-if", true),
            file.status === "uploading" ? (vue.openBlock(), vue.createBlock(_component_el_progress, {
              key: 3,
              type: _ctx.listType === "picture-card" ? "circle" : "line",
              "stroke-width": _ctx.listType === "picture-card" ? 6 : 2,
              percentage: +file.percentage
            }, null, 8, ["type", "stroke-width", "percentage"])) : vue.createCommentVNode("v-if", true),
            _ctx.listType === "picture-card" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, [
              vue.createElementVNode("span", {
                class: "el-upload-list__item-preview",
                onClick: ($event) => _ctx.handlePreview(file)
              }, [
                vue.createVNode(_component_el_icon, { class: "el-icon--zoom-in" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_zoom_in)
                  ]),
                  _: 1
                })
              ], 8, _hoisted_7),
              !_ctx.disabled ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: "el-upload-list__item-delete",
                onClick: ($event) => _ctx.handleRemove($event, file)
              }, [
                vue.createVNode(_component_el_icon, { class: "el-icon--delete" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_delete)
                  ]),
                  _: 1
                })
              ], 8, _hoisted_8)) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ], 42, _hoisted_1);
      }), 128))
    ]),
    _: 3
  }, 8, ["class"]);
}

exports.render = render;
//# sourceMappingURL=upload-list.vue_vue_type_template_id_192277b6_lang.js.map
