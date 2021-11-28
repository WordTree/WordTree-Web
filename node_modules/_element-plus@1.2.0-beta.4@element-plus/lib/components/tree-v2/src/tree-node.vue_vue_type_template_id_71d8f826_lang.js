'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-expanded", "aria-disabled", "aria-checked", "data-key"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_checkbox = vue.resolveComponent("el-checkbox");
  const _component_el_node_content = vue.resolveComponent("el-node-content");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "node$",
    class: vue.normalizeClass(["el-tree-node", {
      "is-expanded": _ctx.expanded,
      "is-current": _ctx.current,
      "is-focusable": !_ctx.disabled,
      "is-checked": !_ctx.disabled && _ctx.checked
    }]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": _ctx.expanded,
    "aria-disabled": _ctx.disabled,
    "aria-checked": _ctx.checked,
    "data-key": (_a = _ctx.node) == null ? void 0 : _a.key,
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onContextmenu: _cache[2] || (_cache[2] = (...args) => _ctx.handleContextMenu && _ctx.handleContextMenu(...args))
  }, [
    vue.createElementVNode("div", {
      class: "el-tree-node__content",
      style: vue.normalizeStyle({ paddingLeft: `${(_ctx.node.level - 1) * _ctx.indent}px` })
    }, [
      _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
        key: 0,
        class: vue.normalizeClass([
          {
            "is-leaf": (_b = _ctx.node) == null ? void 0 : _b.isLeaf,
            "is-hidden": _ctx.hiddenExpandIcon,
            expanded: !((_c = _ctx.node) == null ? void 0 : _c.isLeaf) && _ctx.expanded
          },
          "el-tree-node__expand-icon"
        ]),
        onClick: vue.withModifiers(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : vue.createCommentVNode("v-if", true),
      _ctx.showCheckbox ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
        key: 1,
        "model-value": _ctx.checked,
        indeterminate: _ctx.indeterminate,
        disabled: _ctx.disabled,
        onChange: _ctx.handleCheckChange,
        onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
        }, ["stop"]))
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_el_node_content, { node: _ctx.node }, null, 8, ["node"])
    ], 4)
  ], 42, _hoisted_1);
}

exports.render = render;
//# sourceMappingURL=tree-node.vue_vue_type_template_id_71d8f826_lang.js.map
