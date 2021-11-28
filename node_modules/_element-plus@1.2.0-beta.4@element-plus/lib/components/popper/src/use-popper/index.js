'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@popperjs/core');
var util = require('../../../../utils/util.js');
var popupManager = require('../../../../utils/popup-manager.js');
var popperOptions = require('./popper-options.js');
var defaults = require('./defaults.js');
var shared = require('@vue/shared');

const DEFAULT_TRIGGER = ["hover"];
const UPDATE_VISIBLE_EVENT = "update:visible";
function usePopper(props, { emit }) {
  const arrowRef = vue.ref(null);
  const triggerRef = vue.ref(null);
  const popperRef = vue.ref(null);
  const popperId = `el-popper-${util.generateId()}`;
  let popperInstance = null;
  let showTimer = null;
  let hideTimer = null;
  let triggerFocused = false;
  const isManualMode = () => props.manualMode || props.trigger === "manual";
  const popperStyle = vue.ref({ zIndex: popupManager["default"].nextZIndex() });
  const popperOptions$1 = popperOptions["default"](props, {
    arrow: arrowRef
  });
  const state = vue.reactive({
    visible: !!props.visible
  });
  const visibility = vue.computed({
    get() {
      if (props.disabled) {
        return false;
      } else {
        return util.isBool(props.visible) ? props.visible : state.visible;
      }
    },
    set(val) {
      if (isManualMode())
        return;
      util.isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT, val) : state.visible = val;
    }
  });
  function _show() {
    if (props.autoClose > 0) {
      hideTimer = window.setTimeout(() => {
        _hide();
      }, props.autoClose);
    }
    visibility.value = true;
  }
  function _hide() {
    visibility.value = false;
  }
  function clearTimers() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
  }
  const show = () => {
    if (isManualMode() || props.disabled)
      return;
    clearTimers();
    if (props.showAfter === 0) {
      _show();
    } else {
      showTimer = window.setTimeout(() => {
        _show();
      }, props.showAfter);
    }
  };
  const hide = () => {
    if (isManualMode())
      return;
    clearTimers();
    if (props.hideAfter > 0) {
      hideTimer = window.setTimeout(() => {
        close();
      }, props.hideAfter);
    } else {
      close();
    }
  };
  const close = () => {
    _hide();
    if (props.disabled) {
      doDestroy(true);
    }
  };
  function onPopperMouseEnter() {
    if (props.enterable && props.trigger !== "click") {
      clearTimeout(hideTimer);
    }
  }
  function onPopperMouseLeave() {
    const { trigger } = props;
    const shouldPrevent = shared.isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
    if (shouldPrevent)
      return;
    hide();
  }
  function initializePopper() {
    if (!vue.unref(visibility)) {
      return;
    }
    const unwrappedTrigger = vue.unref(triggerRef);
    const _trigger = util.isHTMLElement(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
    popperInstance = core.createPopper(_trigger, vue.unref(popperRef), vue.unref(popperOptions$1));
    popperInstance.update();
  }
  function doDestroy(forceDestroy) {
    if (!popperInstance || vue.unref(visibility) && !forceDestroy)
      return;
    detachPopper();
  }
  function detachPopper() {
    var _a;
    (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
    popperInstance = null;
  }
  const events = {};
  function update() {
    if (!vue.unref(visibility)) {
      return;
    }
    if (popperInstance) {
      popperInstance.update();
    } else {
      initializePopper();
    }
  }
  function onVisibilityChange(toState) {
    if (toState) {
      popperStyle.value.zIndex = popupManager["default"].nextZIndex();
      initializePopper();
    }
  }
  if (!isManualMode()) {
    const toggleState = () => {
      if (vue.unref(visibility)) {
        hide();
      } else {
        show();
      }
    };
    const popperEventsHandler = (e) => {
      e.stopPropagation();
      switch (e.type) {
        case "click": {
          if (triggerFocused) {
            triggerFocused = false;
          } else {
            toggleState();
          }
          break;
        }
        case "mouseenter": {
          show();
          break;
        }
        case "mouseleave": {
          hide();
          break;
        }
        case "focus": {
          triggerFocused = true;
          show();
          break;
        }
        case "blur": {
          triggerFocused = false;
          hide();
          break;
        }
      }
    };
    const triggerEventsMap = {
      click: ["onClick"],
      hover: ["onMouseenter", "onMouseleave"],
      focus: ["onFocus", "onBlur"]
    };
    const mapEvents = (t) => {
      triggerEventsMap[t].forEach((event) => {
        events[event] = popperEventsHandler;
      });
    };
    if (shared.isArray(props.trigger)) {
      Object.values(props.trigger).forEach(mapEvents);
    } else {
      mapEvents(props.trigger);
    }
  }
  vue.watch(popperOptions$1, (val) => {
    if (!popperInstance)
      return;
    popperInstance.setOptions(val);
    popperInstance.update();
  });
  vue.watch(visibility, onVisibilityChange);
  return {
    update,
    doDestroy,
    show,
    hide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      emit("after-enter");
    },
    onAfterLeave: () => {
      detachPopper();
      emit("after-leave");
    },
    onBeforeEnter: () => {
      emit("before-enter");
    },
    onBeforeLeave: () => {
      emit("before-leave");
    },
    initializePopper,
    isManualMode,
    arrowRef,
    events,
    popperId,
    popperInstance,
    popperRef,
    popperStyle,
    triggerRef,
    visibility
  };
}

exports.Effect = defaults.Effect;
exports.DEFAULT_TRIGGER = DEFAULT_TRIGGER;
exports.UPDATE_VISIBLE_EVENT = UPDATE_VISIBLE_EVENT;
exports["default"] = usePopper;
//# sourceMappingURL=index.js.map
