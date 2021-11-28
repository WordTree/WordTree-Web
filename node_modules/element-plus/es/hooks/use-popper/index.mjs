import { getCurrentInstance, ref, computed, toRef, nextTick, h, Transition, renderSlot, toDisplayString, cloneVNode, Fragment, withDirectives } from 'vue';
import { isString, NOOP } from '@vue/shared';
import { createPopper } from '@popperjs/core';
import '../../directives/index.mjs';
import { generateId, isHTMLElement, refAttacher } from '../../utils/util.mjs';
import { getFirstValidNode } from '../../utils/vnode.mjs';
import { stop } from '../../utils/dom.mjs';
import PopupManager from '../../utils/popup-manager.mjs';
import { throwError } from '../../utils/error.mjs';
import useTeleport from '../use-teleport/index.mjs';
import useTimeout from '../use-timeout/index.mjs';
import { useModelToggle } from '../use-model-toggle/index.mjs';
import { useTransitionFallthrough } from '../use-transition-fallthrough/index.mjs';
import { defaultPopperOptions, defaultModifiers } from './use-popper-options.mjs';
import { DEFAULT_TRIGGER, useTargetEvents } from './use-target-events.mjs';
import ClickOutside from '../../directives/click-outside/index.mjs';

const DARK_EFFECT = "dark";
const LIGHT_EFFECT = "light";
const usePopperControlProps = {
  appendToBody: {
    type: Boolean,
    default: true
  },
  arrowOffset: {
    type: Number
  },
  popperOptions: defaultPopperOptions,
  popperClass: {
    type: String,
    default: ""
  }
};
const usePopperProps = {
  ...usePopperControlProps,
  autoClose: {
    type: Number,
    default: 0
  },
  content: {
    type: String,
    default: ""
  },
  class: String,
  style: Object,
  hideAfter: {
    type: Number,
    default: 200
  },
  disabled: {
    type: Boolean,
    default: false
  },
  effect: {
    type: String,
    default: DARK_EFFECT
  },
  enterable: {
    type: Boolean,
    default: true
  },
  manualMode: {
    type: Boolean,
    default: false
  },
  showAfter: {
    type: Number,
    default: 0
  },
  pure: {
    type: Boolean,
    default: false
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  trigger: {
    type: [String, Array],
    default: DEFAULT_TRIGGER
  },
  visible: {
    type: Boolean,
    default: void 0
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  }
};
const usePopperHook = () => {
  var _a;
  const vm = getCurrentInstance();
  const props = (_a = vm.proxy) == null ? void 0 : _a.$props;
  const { slots } = vm;
  const arrowRef = ref(null);
  const triggerRef = ref(null);
  const popperRef = ref(null);
  const popperStyle = ref({ zIndex: PopupManager.nextZIndex() });
  const visible = ref(false);
  const isManual = computed(() => props.manualMode || props.trigger === "manual");
  const popperId = `el-popper-${generateId()}`;
  let popperInstance = null;
  const { renderTeleport, showTeleport, hideTeleport } = useTeleport(popupRenderer, toRef(props, "appendToBody"));
  const { show, hide } = useModelToggle({
    indicator: visible,
    onShow,
    onHide
  });
  const { registerTimeout, cancelTimeout } = useTimeout();
  function onShow() {
    popperStyle.value.zIndex = PopupManager.nextZIndex();
    nextTick(initializePopper);
  }
  function onHide() {
    hideTeleport();
    nextTick(detachPopper);
  }
  function delayShow() {
    if (isManual.value || props.disabled)
      return;
    showTeleport();
    registerTimeout(show, props.showAfter);
  }
  function delayHide() {
    if (isManual.value)
      return;
    registerTimeout(hide, props.hideAfter);
  }
  function onToggle() {
    if (visible.value) {
      delayShow();
    } else {
      delayHide();
    }
  }
  function detachPopper() {
    var _a2;
    (_a2 = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a2.call(popperInstance);
    popperInstance = null;
  }
  function onPopperMouseEnter() {
    if (props.enterable && props.trigger !== "click") {
      cancelTimeout();
    }
  }
  function onPopperMouseLeave() {
    const { trigger } = props;
    const shouldPrevent = isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
    if (shouldPrevent)
      return;
    delayHide();
  }
  function initializePopper() {
    if (!visible.value || popperInstance !== null) {
      return;
    }
    const unwrappedTrigger = triggerRef.value;
    const $el = isHTMLElement(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
    popperInstance = createPopper($el, popperRef.value, buildPopperOptions());
    popperInstance.update();
  }
  function buildPopperOptions() {
    const modifiers = [...defaultModifiers, ...props.popperOptions.modifiers];
    if (props.showArrow) {
      modifiers.push({
        name: "arrow",
        options: {
          padding: props.arrowOffset || 5,
          element: arrowRef.value
        }
      });
    }
    return {
      ...props.popperOptions,
      modifiers
    };
  }
  const { onAfterEnter, onAfterLeave, onBeforeEnter, onBeforeLeave } = useTransitionFallthrough();
  const events = useTargetEvents(delayShow, delayHide, onToggle);
  const arrowRefAttacher = refAttacher(arrowRef);
  const popperRefAttacher = refAttacher(popperRef);
  const triggerRefAttacher = refAttacher(triggerRef);
  function popupRenderer() {
    const mouseUpAndDown = props.stopPopperMouseEvent ? stop : NOOP;
    return h(Transition, {
      name: props.transition,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave
    }, {
      default: () => () => visible.value ? h("div", {
        "aria-hidden": false,
        class: [
          props.popperClass,
          "el-popper",
          `is-${props.effect}`,
          props.pure ? "is-pure" : ""
        ],
        style: popperStyle.value,
        id: popperId,
        ref: popperRefAttacher,
        role: "tooltip",
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onClick: stop,
        onMousedown: mouseUpAndDown,
        onMouseup: mouseUpAndDown
      }, [
        renderSlot(slots, "default", {}, () => [
          toDisplayString(props.content)
        ]),
        arrowRenderer()
      ]) : null
    });
  }
  function arrowRenderer() {
    return props.showArrow ? h("div", {
      ref: arrowRefAttacher,
      class: "el-popper__arrow",
      "data-popper-arrow": ""
    }, null) : null;
  }
  function triggerRenderer(triggerProps) {
    var _a2;
    const trigger = (_a2 = slots.trigger) == null ? void 0 : _a2.call(slots);
    const firstElement = getFirstValidNode(trigger, 1);
    if (!firstElement)
      throwError("renderTrigger", "trigger expects single rooted node");
    return cloneVNode(firstElement, triggerProps, true);
  }
  function render() {
    const trigger = triggerRenderer({
      "aria-describedby": popperId,
      class: props.class,
      style: props.style,
      ref: triggerRefAttacher,
      ...events
    });
    return h(Fragment, null, [
      isManual.value ? trigger : withDirectives(trigger, [[ClickOutside, delayHide]]),
      renderTeleport()
    ]);
  }
  return {
    render
  };
};

export { DARK_EFFECT, LIGHT_EFFECT, usePopperControlProps, usePopperHook, usePopperProps };
//# sourceMappingURL=index.mjs.map
