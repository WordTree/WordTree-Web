import { resolveComponent, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, createVNode } from 'vue';

const _hoisted_1 = ["aria-expanded", "aria-disabled", "aria-checked", "data-key"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_node_content = resolveComponent("el-node-content");
  return openBlock(), createElementBlock("div", {
    ref: "node$",
    class: normalizeClass(["el-tree-node", {
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
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onContextmenu: _cache[2] || (_cache[2] = (...args) => _ctx.handleContextMenu && _ctx.handleContextMenu(...args))
  }, [
    createElementVNode("div", {
      class: "el-tree-node__content",
      style: normalizeStyle({ paddingLeft: `${(_ctx.node.level - 1) * _ctx.indent}px` })
    }, [
      _ctx.icon ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: normalizeClass([
          {
            "is-leaf": (_b = _ctx.node) == null ? void 0 : _b.isLeaf,
            "is-hidden": _ctx.hiddenExpandIcon,
            expanded: !((_c = _ctx.node) == null ? void 0 : _c.isLeaf) && _ctx.expanded
          },
          "el-tree-node__expand-icon"
        ]),
        onClick: withModifiers(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
      _ctx.showCheckbox ? (openBlock(), createBlock(_component_el_checkbox, {
        key: 1,
        "model-value": _ctx.checked,
        indeterminate: _ctx.indeterminate,
        disabled: _ctx.disabled,
        onChange: _ctx.handleCheckChange,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : createCommentVNode("v-if", true),
      createVNode(_component_el_node_content, { node: _ctx.node }, null, 8, ["node"])
    ], 4)
  ], 42, _hoisted_1);
}

export { render };
//# sourceMappingURL=tree-node.vue_vue_type_template_id_71d8f826_lang.mjs.map
