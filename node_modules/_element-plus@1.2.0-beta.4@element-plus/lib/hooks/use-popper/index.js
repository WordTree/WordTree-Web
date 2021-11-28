'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@popperjs/core');
require('../../directives/index.js');
var util = require('../../utils/util.js');
var vnode = require('../../utils/vnode.js');
var dom = require('../../utils/dom.js');
var popupManager = require('../../utils/popup-manager.js');
var error = require('../../utils/error.js');
var index = require('../use-teleport/index.js');
var index$2 = require('../use-timeout/index.js');
var index$1 = require('../use-model-toggle/index.js');
var index$3 = require('../use-transition-fallthrough/index.js');
var usePopperOptions = require('./use-popper-options.js');
var useTargetEvents = require('./use-target-events.js');
var index$4 = require('../../directives/click-outside/index.js');

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
  popperOptions: usePopperOptions.defaultPopperOptions,
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
    default: useTargetEvents.DEFAULT_TRIGGER
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
  const vm = vue.getCurrentInstance();
  const props = (_a = vm.proxy) == null ? void 0 : _a.$props;
  const { slots } = vm;
  const arrowRef = vue.ref(null);
  const triggerRef = vue.ref(null);
  const popperRef = vue.ref(null);
  const popperStyle = vue.ref({ zIndex: popupManager["default"].nextZIndex() });
  const visible = vue.ref(false);
  const isManual = vue.computed(() => props.manualMode || props.trigger === "manual");
  const popperId = `el-popper-${util.generateId()}`;
  let popperInstance = null;
  const { renderTeleport, showTeleport, hideTeleport } = index["default"](popupRenderer, vue.toRef(props, "appendToBody"));
  const { show, hide } = index$1.useModelToggle({
    indicator: visible,
    onShow,
    onHide
  });
  const { registerTimeout, cancelTimeout } = index$2["default"]();
  function onShow() {
    popperStyle.value.zIndex = popupManager["default"].nextZIndex();
    vue.nextTick(initializePopper);
  }
  function onHide() {
    hideTeleport();
    vue.nextTick(detachPopper);
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
    const shouldPrevent = shared.isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
    if (shouldPrevent)
      return;
    delayHide();
  }
  function initializePopper() {
    if (!visible.value || popperInstance !== null) {
      return;
    }
    const unwrappedTrigger = triggerRef.value;
    const $el = util.isHTMLElement(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
    popperInstance = core.createPopper($el, popperRef.value, buildPopperOptions());
    popperInstance.update();
  }
  function buildPopperOptions() {
    const modifiers = [...usePopperOptions.defaultModifiers, ...props.popperOptions.modifiers];
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
  const { onAfterEnter, onAfterLeave, onBeforeEnter, onBeforeLeave } = index$3.useTransitionFallthrough();
  const events = useTargetEvents.useTargetEvents(delayShow, delayHide, onToggle);
  const arrowRefAttacher = util.refAttacher(arrowRef);
  const popperRefAttacher = util.refAttacher(popperRef);
  const triggerRefAttacher = util.refAttacher(triggerRef);
  function popupRenderer() {
    const mouseUpAndDown = props.stopPopperMouseEvent ? dom.stop : shared.NOOP;
    return vue.h(vue.Transition, {
      name: props.transition,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave
    }, {
      default: () => () => visible.value ? vue.h("div", {
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
        onClick: dom.stop,
        onMousedown: mouseUpAndDown,
        onMouseup: mouseUpAndDown
      }, [
        vue.renderSlot(slots, "default", {}, () => [
          vue.toDisplayString(props.content)
        ]),
        arrowRenderer()
      ]) : null
    });
  }
  function arrowRenderer() {
    return props.showArrow ? vue.h("div", {
      ref: arrowRefAttacher,
      class: "el-popper__arrow",
      "data-popper-arrow": ""
    }, null) : null;
  }
  function triggerRenderer(triggerProps) {
    var _a2;
    const trigger = (_a2 = slots.trigger) == null ? void 0 : _a2.call(slots);
    const firstElement = vnode.getFirstValidNode(trigger, 1);
    if (!firstElement)
      error.throwError("renderTrigger", "trigger expects single rooted node");
    return vue.cloneVNode(firstElement, triggerProps, true);
  }
  function render() {
    const trigger = triggerRenderer({
      "aria-describedby": popperId,
      class: props.class,
      style: props.style,
      ref: triggerRefAttacher,
      ...events
    });
    return vue.h(vue.Fragment, null, [
      isManual.value ? trigger : vue.withDirectives(trigger, [[index$4["default"], delayHide]]),
      renderTeleport()
    ]);
  }
  return {
    render
  };
};

exports.DARK_EFFECT = DARK_EFFECT;
exports.LIGHT_EFFECT = LIGHT_EFFECT;
exports.usePopperControlProps = usePopperControlProps;
exports.usePopperHook = usePopperHook;
exports.usePopperProps = usePopperProps;
//# sourceMappingURL=index.js.map
