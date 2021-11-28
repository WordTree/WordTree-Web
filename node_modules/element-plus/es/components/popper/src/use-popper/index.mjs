import { ref, reactive, computed, unref, watch } from 'vue';
import { createPopper } from '@popperjs/core';
import { generateId, isBool, isHTMLElement } from '../../../../utils/util.mjs';
import PopupManager from '../../../../utils/popup-manager.mjs';
import usePopperOptions from './popper-options.mjs';
export { Effect } from './defaults.mjs';
import { isString, isArray } from '@vue/shared';

const DEFAULT_TRIGGER = ["hover"];
const UPDATE_VISIBLE_EVENT = "update:visible";
function usePopper(props, { emit }) {
  const arrowRef = ref(null);
  const triggerRef = ref(null);
  const popperRef = ref(null);
  const popperId = `el-popper-${generateId()}`;
  let popperInstance = null;
  let showTimer = null;
  let hideTimer = null;
  let triggerFocused = false;
  const isManualMode = () => props.manualMode || props.trigger === "manual";
  const popperStyle = ref({ zIndex: PopupManager.nextZIndex() });
  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef
  });
  const state = reactive({
    visible: !!props.visible
  });
  const visibility = computed({
    get() {
      if (props.disabled) {
        return false;
      } else {
        return isBool(props.visible) ? props.visible : state.visible;
      }
    },
    set(val) {
      if (isManualMode())
        return;
      isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT, val) : state.visible = val;
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
    const shouldPrevent = isString(trigger) && (trigger === "click" || trigger === "focus") || trigger.length === 1 && (trigger[0] === "click" || trigger[0] === "focus");
    if (shouldPrevent)
      return;
    hide();
  }
  function initializePopper() {
    if (!unref(visibility)) {
      return;
    }
    const unwrappedTrigger = unref(triggerRef);
    const _trigger = isHTMLElement(unwrappedTrigger) ? unwrappedTrigger : unwrappedTrigger.$el;
    popperInstance = createPopper(_trigger, unref(popperRef), unref(popperOptions));
    popperInstance.update();
  }
  function doDestroy(forceDestroy) {
    if (!popperInstance || unref(visibility) && !forceDestroy)
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
    if (!unref(visibility)) {
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
      popperStyle.value.zIndex = PopupManager.nextZIndex();
      initializePopper();
    }
  }
  if (!isManualMode()) {
    const toggleState = () => {
      if (unref(visibility)) {
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
    if (isArray(props.trigger)) {
      Object.values(props.trigger).forEach(mapEvents);
    } else {
      mapEvents(props.trigger);
    }
  }
  watch(popperOptions, (val) => {
    if (!popperInstance)
      return;
    popperInstance.setOptions(val);
    popperInstance.update();
  });
  watch(visibility, onVisibilityChange);
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

export { DEFAULT_TRIGGER, UPDATE_VISIBLE_EVENT, usePopper as default };
//# sourceMappingURL=index.mjs.map
