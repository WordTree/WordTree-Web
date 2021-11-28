'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-expanded", "aria-controls", "aria-describedby"];
const _hoisted_2 = ["id", "tabindex"];
const _hoisted_3 = ["id", "aria-hidden", "aria-labelledby"];
const _hoisted_4 = { class: "el-collapse-item__content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_collapse_transition = vue.resolveComponent("el-collapse-transition");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-collapse-item", { "is-active": _ctx.isActive, "is-disabled": _ctx.disabled }])
  }, [
    vue.createElementVNode("div", {
      role: "tab",
      "aria-expanded": _ctx.isActive,
      "aria-controls": `el-collapse-content-${_ctx.id}`,
      "aria-describedby": `el-collapse-content-${_ctx.id}`
    }, [
      vue.createElementVNode("div", {
        id: `el-collapse-head-${_ctx.id}`,
        class: vue.normalizeClass(["el-collapse-item__header", {
          focusing: _ctx.focusing,
          "is-active": _ctx.isActive
        }]),
        role: "button",
        tabindex: _ctx.disabled ? -1 : 0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleHeaderClick && _ctx.handleHeaderClick(...args)),
        onKeyup: _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers((...args) => _ctx.handleEnterClick && _ctx.handleEnterClick(...args), ["stop"]), ["space", "enter"])),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focusing = false)
      }, [
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
        ]),
        vue.createVNode(_component_el_icon, {
          class: vue.normalizeClass(["el-collapse-item__arrow", { "is-active": _ctx.isActive }])
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_arrow_right)
          ]),
          _: 1
        }, 8, ["class"])
      ], 42, _hoisted_2)
    ], 8, _hoisted_1),
    vue.createVNode(_component_el_collapse_transition, null, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", {
          id: `el-collapse-content-${_ctx.id}`,
          class: "el-collapse-item__wrap",
          role: "tabpanel",
          "aria-hidden": !_ctx.isActive,
          "aria-labelledby": `el-collapse-head-${_ctx.id}`
        }, [
          vue.createElementVNode("div", _hoisted_4, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 8, _hoisted_3), [
          [vue.vShow, _ctx.isActive]
        ])
      ]),
      _: 3
    })
  ], 2);
}

exports.render = render;
//# sourceMappingURL=collapse-item.vue_vue_type_template_id_80da782a_lang.js.map
