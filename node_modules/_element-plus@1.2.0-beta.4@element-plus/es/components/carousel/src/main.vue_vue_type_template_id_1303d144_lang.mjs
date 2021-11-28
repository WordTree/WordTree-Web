import { resolveComponent, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, normalizeStyle, createBlock, Transition, withCtx, withDirectives, createVNode, vShow, createCommentVNode, renderSlot, Fragment, renderList, toDisplayString } from 'vue';

const _hoisted_1 = ["onMouseenter", "onClick"];
const _hoisted_2 = { class: "el-carousel__button" };
const _hoisted_3 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: normalizeClass(_ctx.carouselClasses),
    onMouseenter: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args), ["stop"])),
    onMouseleave: _cache[7] || (_cache[7] = withModifiers((...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args), ["stop"]))
  }, [
    createElementVNode("div", {
      class: "el-carousel__container",
      style: normalizeStyle({ height: _ctx.height })
    }, [
      _ctx.arrowDisplay ? (openBlock(), createBlock(Transition, {
        key: 0,
        name: "carousel-arrow-left"
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("button", {
            type: "button",
            class: "el-carousel__arrow el-carousel__arrow--left",
            onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.handleButtonEnter("left")),
            onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex - 1), ["stop"]))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_left)
              ]),
              _: 1
            })
          ], 544), [
            [
              vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex > 0)
            ]
          ])
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      _ctx.arrowDisplay ? (openBlock(), createBlock(Transition, {
        key: 1,
        name: "carousel-arrow-right"
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("button", {
            type: "button",
            class: "el-carousel__arrow el-carousel__arrow--right",
            onMouseenter: _cache[3] || (_cache[3] = ($event) => _ctx.handleButtonEnter("right")),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.handleButtonLeave && _ctx.handleButtonLeave(...args)),
            onClick: _cache[5] || (_cache[5] = withModifiers(($event) => _ctx.throttledArrowClick(_ctx.data.activeIndex + 1), ["stop"]))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ], 544), [
            [
              vShow,
              (_ctx.arrow === "always" || _ctx.data.hover) && (_ctx.props.loop || _ctx.data.activeIndex < _ctx.items.length - 1)
            ]
          ])
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ], 4),
    _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
      key: 0,
      class: normalizeClass(_ctx.indicatorsClasses)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          class: normalizeClass([
            "el-carousel__indicator",
            "el-carousel__indicator--" + _ctx.direction,
            { "is-active": index === _ctx.data.activeIndex }
          ]),
          onMouseenter: ($event) => _ctx.throttledIndicatorHover(index),
          onClick: withModifiers(($event) => _ctx.handleIndicatorClick(index), ["stop"])
        }, [
          createElementVNode("button", _hoisted_2, [
            _ctx.hasLabel ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(item.label), 1)) : createCommentVNode("v-if", true)
          ])
        ], 42, _hoisted_1);
      }), 128))
    ], 2)) : createCommentVNode("v-if", true)
  ], 34);
}

export { render };
//# sourceMappingURL=main.vue_vue_type_template_id_1303d144_lang.mjs.map
