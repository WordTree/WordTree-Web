import { resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, withKeys, withModifiers, renderSlot, createTextVNode, toDisplayString, createVNode, withCtx, withDirectives, vShow } from 'vue';

const _hoisted_1 = ["aria-expanded", "aria-controls", "aria-describedby"];
const _hoisted_2 = ["id", "tabindex"];
const _hoisted_3 = ["id", "aria-hidden", "aria-labelledby"];
const _hoisted_4 = { class: "el-collapse-item__content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-collapse-item", { "is-active": _ctx.isActive, "is-disabled": _ctx.disabled }])
  }, [
    createElementVNode("div", {
      role: "tab",
      "aria-expanded": _ctx.isActive,
      "aria-controls": `el-collapse-content-${_ctx.id}`,
      "aria-describedby": `el-collapse-content-${_ctx.id}`
    }, [
      createElementVNode("div", {
        id: `el-collapse-head-${_ctx.id}`,
        class: normalizeClass(["el-collapse-item__header", {
          focusing: _ctx.focusing,
          "is-active": _ctx.isActive
        }]),
        role: "button",
        tabindex: _ctx.disabled ? -1 : 0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleHeaderClick && _ctx.handleHeaderClick(...args)),
        onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.handleEnterClick && _ctx.handleEnterClick(...args), ["stop"]), ["space", "enter"])),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focusing = false)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ]),
        createVNode(_component_el_icon, {
          class: normalizeClass(["el-collapse-item__arrow", { "is-active": _ctx.isActive }])
        }, {
          default: withCtx(() => [
            createVNode(_component_arrow_right)
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, _hoisted_2)
    ], 8, _hoisted_1),
    createVNode(_component_el_collapse_transition, null, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          id: `el-collapse-content-${_ctx.id}`,
          class: "el-collapse-item__wrap",
          role: "tabpanel",
          "aria-hidden": !_ctx.isActive,
          "aria-labelledby": `el-collapse-head-${_ctx.id}`
        }, [
          createElementVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 8, _hoisted_3), [
          [vShow, _ctx.isActive]
        ])
      ]),
      _: 3
    })
  ], 2);
}

export { render };
//# sourceMappingURL=collapse-item.vue_vue_type_template_id_80da782a_lang.mjs.map
