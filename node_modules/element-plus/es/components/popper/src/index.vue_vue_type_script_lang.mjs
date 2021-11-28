import { defineComponent, onMounted, onBeforeUnmount, onActivated, onDeactivated, renderSlot, toDisplayString, withDirectives, h, Fragment, Teleport } from 'vue';
import '../../../directives/index.mjs';
import { throwError } from '../../../utils/error.mjs';
import usePopper from './use-popper/index.mjs';
import popperDefaultProps from './use-popper/defaults.mjs';
import './renderers/index.mjs';
import renderArrow from './renderers/arrow.mjs';
import renderPopper from './renderers/popper.mjs';
import renderTrigger from './renderers/trigger.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';

const compName = "ElPopper";
const UPDATE_VISIBLE_EVENT = "update:visible";
var script = defineComponent({
  name: compName,
  props: popperDefaultProps,
  emits: [
    UPDATE_VISIBLE_EVENT,
    "after-enter",
    "after-leave",
    "before-enter",
    "before-leave"
  ],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(compName, "Trigger must be provided");
    }
    const popperStates = usePopper(props, ctx);
    const forceDestroy = () => popperStates.doDestroy(true);
    onMounted(popperStates.initializePopper);
    onBeforeUnmount(forceDestroy);
    onActivated(popperStates.initializePopper);
    onDeactivated(forceDestroy);
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
    const arrow = renderArrow(showArrow);
    const popper = renderPopper({
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
      renderSlot($slots, "default", {}, () => {
        return [toDisplayString(this.content)];
      }),
      arrow
    ]);
    const _t = (_a = $slots.trigger) == null ? void 0 : _a.call($slots);
    const triggerProps = {
      "aria-describedby": popperId,
      class: kls,
      style,
      ref: "triggerRef",
      ...this.events
    };
    const trigger = isManual ? renderTrigger(_t, triggerProps) : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]]);
    return h(Fragment, null, [
      trigger,
      h(Teleport, {
        to: "body",
        disabled: !appendToBody
      }, [popper])
    ]);
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
