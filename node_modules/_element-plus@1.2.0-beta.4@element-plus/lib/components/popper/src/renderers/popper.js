'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var dom = require('../../../../utils/dom.js');

function renderPopper(props, children) {
  const {
    effect,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseenter,
    onMouseleave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  } = props;
  const kls = [popperClass, "el-popper", `is-${effect}`, pure ? "is-pure" : ""];
  const mouseUpAndDown = stopPopperMouseEvent ? dom.stop : shared.NOOP;
  return vue.h(vue.Transition, {
    name,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.h("div", {
        "aria-hidden": String(!visibility),
        class: kls,
        style: popperStyle != null ? popperStyle : {},
        id: popperId,
        ref: popperRef != null ? popperRef : "popperRef",
        role: "tooltip",
        onMouseenter,
        onMouseleave,
        onClick: dom.stop,
        onMousedown: mouseUpAndDown,
        onMouseup: mouseUpAndDown
      }, children), [[vue.vShow, visibility]])
    ])
  });
}

exports["default"] = renderPopper;
//# sourceMappingURL=popper.js.map
