import { h, Transition, withCtx, withDirectives, vShow } from 'vue';
import { NOOP } from '@vue/shared';
import { stop } from '../../../../utils/dom.mjs';

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
  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP;
  return h(Transition, {
    name,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave
  }, {
    default: withCtx(() => [
      withDirectives(h("div", {
        "aria-hidden": String(!visibility),
        class: kls,
        style: popperStyle != null ? popperStyle : {},
        id: popperId,
        ref: popperRef != null ? popperRef : "popperRef",
        role: "tooltip",
        onMouseenter,
        onMouseleave,
        onClick: stop,
        onMousedown: mouseUpAndDown,
        onMouseup: mouseUpAndDown
      }, children), [[vShow, visibility]])
    ])
  });
}

export { renderPopper as default };
//# sourceMappingURL=popper.mjs.map
