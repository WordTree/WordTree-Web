'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"];
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = vue.resolveComponent("el-checkbox");
  const _component_el_radio = vue.resolveComponent("el-radio");
  const _component_check = vue.resolveComponent("check");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_node_content = vue.resolveComponent("node-content");
  const _component_loading = vue.resolveComponent("loading");
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  return vue.openBlock(), vue.createElementBlock("li", {
    id: `${_ctx.menuId}-${_ctx.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !_ctx.isLeaf,
    "aria-owns": _ctx.isLeaf ? null : _ctx.menuId,
    "aria-expanded": _ctx.inExpandingPath,
    tabindex: _ctx.expandable ? -1 : void 0,
    class: vue.normalizeClass([
      "el-cascader-node",
      _ctx.checkStrictly && "is-selectable",
      _ctx.inExpandingPath && "in-active-path",
      _ctx.inCheckedPath && "in-checked-path",
      _ctx.node.checked && "is-active",
      !_ctx.expandable && "is-disabled"
    ]),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    vue.createCommentVNode(" prefix "),
    _ctx.multiple ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
      key: 0,
      "model-value": _ctx.node.checked,
      indeterminate: _ctx.node.indeterminate,
      disabled: _ctx.isDisabled,
      onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
      }, ["stop"])),
      "onUpdate:modelValue": _ctx.handleCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : _ctx.checkStrictly ? (vue.openBlock(), vue.createBlock(_component_el_radio, {
      key: 1,
      "model-value": _ctx.checkedNodeId,
      label: _ctx.node.uid,
      disabled: _ctx.isDisabled,
      "onUpdate:modelValue": _ctx.handleCheck,
      onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
      }, ["stop"]))
    }, {
      default: vue.withCtx(() => [
        vue.createCommentVNode("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "),
        _hoisted_2
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : _ctx.isLeaf && _ctx.node.checked ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
      key: 2,
      class: "el-cascader-node__prefix"
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_check)
      ]),
      _: 1
    })) : vue.createCommentVNode("v-if", true),
    vue.createCommentVNode(" content "),
    vue.createVNode(_component_node_content),
    vue.createCommentVNode(" postfix "),
    !_ctx.isLeaf ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
      _ctx.node.loading ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
        key: 0,
        class: "is-loading el-cascader-node__postfix"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_loading)
        ]),
        _: 1
      })) : (vue.openBlock(), vue.createBlock(_component_el_icon, {
        key: 1,
        class: "arrow-right el-cascader-node__postfix"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_arrow_right)
        ]),
        _: 1
      }))
    ], 2112)) : vue.createCommentVNode("v-if", true)
  ], 42, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=node.vue_vue_type_template_id_18b09cb2_lang.js.map
