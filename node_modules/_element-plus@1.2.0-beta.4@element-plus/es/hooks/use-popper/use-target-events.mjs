import { getCurrentInstance, computed } from 'vue';
import '../../utils/util.mjs';
import { isArray } from '@vue/shared';

const DEFAULT_TRIGGER = "hover";
const useTargetEvents = (onShow, onHide, onToggle) => {
  const { props } = getCurrentInstance();
  let triggerFocused = false;
  const popperEventsHandler = (e) => {
    e.stopPropagation();
    switch (e.type) {
      case "click": {
        if (triggerFocused) {
          triggerFocused = false;
        } else {
          onToggle();
        }
        break;
      }
      case "mouseenter": {
        onShow();
        break;
      }
      case "mouseleave": {
        onHide();
        break;
      }
      case "focus": {
        triggerFocused = true;
        onShow();
        break;
      }
      case "blur": {
        triggerFocused = false;
        onHide();
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
    var _a;
    const events = {};
    (_a = triggerEventsMap[t]) == null ? void 0 : _a.forEach((event) => {
      events[event] = popperEventsHandler;
    });
    return events;
  };
  return computed(() => {
    if (isArray(props.trigger)) {
      return Object.values(props.trigger).reduce((pre, t) => {
        return {
          ...pre,
          ...mapEvents(t)
        };
      }, {});
    } else {
      return mapEvents(props.trigger);
    }
  });
};

export { DEFAULT_TRIGGER, useTargetEvents };
//# sourceMappingURL=use-target-events.mjs.map
