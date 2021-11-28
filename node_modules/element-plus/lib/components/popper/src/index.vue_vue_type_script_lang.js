'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index.js');
var error = require('../../../utils/error.js');
var index = require('./use-popper/index.js');
var defaults = require('./use-popper/defaults.js');
require('./renderers/index.js');
var arrow = require('./renderers/arrow.js');
var popper = require('./renderers/popper.js');
var trigger = require('./renderers/trigger.js');
var index$1 = require('../../../directives/click-outside/index.js');

const compName = "ElPopper";
const UPDATE_VISIBLE_EVENT = "update:visible";
var script = vue.defineComponent({
  name: compName,
  props: defaults["default"],
  emits: [
    UPDATE_VISIBLE_EVENT,
    "after-enter",
    "after-leave",
    "before-enter",
    "before-leave"
  ],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      error.throwError(compName, "Trigger must be provided");
    }
    const popperStates = index["default"](props, ctx);
    const forceDestroy = () => popperStates.doDestroy(true);
    vue.onMounted(popperStates.initializePopper);
    vue.onBeforeUnmount(forceDestroy);
    vue.onActivated(popperStates.initializePopper);
    vue.onDeactivated(forceDestroy);
    return popperStates;
  },
  render() {
    var _a;
    const {
      $slots,
      appendToBody,
      class: kls,
      style,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent
    } = this;
    const isManual = this.isManualMode();
    const arrow$1 = arrow["default"](showArrow);
    const popper$1 = popper["default"]({
      effect,
      name: transition,
      popperClass,
      popperId,
      popperStyle,
      pure,
      stopPopperMouseEvent,
      onMouseenter: onPopperMouseEnter,
      onMouseleave: onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      visibility
    }, [
      vue.renderSlot($slots, "default", {}, () => {
        return [vue.toDisplayString(this.content)];
      }),
      arrow$1
    ]);
    const _t = (_a = $slots.trigger) == null ? void 0 : _a.call($slots);
    const triggerProps = {
      "aria-describedby": popperId,
      class: kls,
      style,
      ref: "triggerRef",
      ...this.events
    };
    const trigger$1 = isManual ? trigger["default"](_t, triggerProps) : vue.withDirectives(trigger["default"](_t, triggerProps), [[index$1["default"], hide]]);
    return vue.h(vue.Fragment, null, [
      trigger$1,
      vue.h(vue.Teleport, {
        to: "body",
        disabled: !appendToBody
      }, [popper$1])
    ]);
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
