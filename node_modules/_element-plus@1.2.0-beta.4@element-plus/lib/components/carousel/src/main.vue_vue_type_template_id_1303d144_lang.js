'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["onMouseenter", "onClick"];
const _hoisted_2 = { class: "el-carousel__button" };
const _hoisted_3 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_left = vue.resolveComponent("arrow-left");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_arrow_right = vue.resolveComponent("arrow-right");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "root",
    class: vue.normalizeClass(_ctx.carouselClasses),
    onMouseenter: _cache[6] || (_cache[6] = vue.withModifiers((...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args), ["stop"])),
    onMouseleave: _cache[7] || (_cache[7] = vue.withModifiers((...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args), ["stop"]))
  }, [
    vue.createElementVNode("div", {
      class: "el-carousel__container",
      style: vue.normalizeStyle({ height: _ctx.height })
    }, [
      _ctx.arrowDisplay ? (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 0,
        name: "carousel-arrow-left"
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("button", {
            type: "button",
            class: "el-carousel__arrow el-carousel__arrow--left",
            onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.handleButtonEnter("left")),
            onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex - 1), ["stop"]))
          }, [
            vue.createVNode(_component_el_icon, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_arrow_left)
              ]),
              _: 1
            })
          ], 544), [
            [
              vue.vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex > 0)
            ]
          ])
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      _ctx.arrowDisplay ? (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 1,
        name: "carousel-arrow-right"
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("button", {
            type: "button",
            class: "el-carousel__arrow el-carousel__arrow--right",
            onMouseenter: _cache[3] || (_cache[3] = ($event) => _ctx.handleButtonEnter("right")),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[5] || (_cache[5] = vue.withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex + 1), ["stop"]))
          }, [
            vue.createVNode(_component_el_icon, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ], 544), [
            [
              vue.vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex < _ctx.items.length - 1)
            ]
          ])
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default")
    ], 4),
    _ctx.indicatorPosition !== "none" ? (vue.openBlock(), vue.createElementBlock("ul", {
      key: 0,
      class: vue.normalizeClass(_ctx.indicatorsClasses)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.items, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          key: index,
          class: vue.normalizeClass([
            "el-carousel__indicator",
            "el-carousel__indicator--" + _ctx.direction,
            { "is-active": index === _ctx.data.activeIndex }
          ]),
          onMouseenter: ($event) => _ctx.throttledIndicatorHover(index),
          onClick: vue.withModifiers(($event) => _ctx.handleIndicatorClick(index), ["stop"])
        }, [
          vue.createElementVNode("button", _hoisted_2, [
            _ctx.hasLabel ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(item.label), 1)) : vue.createCommentVNode("v-if", true)
          ])
        ], 42, _hoisted_1);
      }), 128))
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 34);
}

exports.render = render;
//# sourceMappingURL=main.vue_vue_type_template_id_1303d144_lang.js.map
