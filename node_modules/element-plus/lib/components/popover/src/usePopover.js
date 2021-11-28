'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/util.js');
require('../../popper/index.js');
var popupManager = require('../../../utils/popup-manager.js');
var shared = require('@vue/shared');
var index = require('../../popper/src/use-popper/index.js');

const SHOW_EVENT = "show";
const HIDE_EVENT = "hide";
function usePopover(props, ctx) {
  const zIndex = vue.ref(popupManager["default"].nextZIndex());
  const width = vue.computed(() => {
    if (shared.isString(props.width)) {
      return props.width;
    }
    return `${props.width}px`;
  });
  const popperStyle = vue.computed(() => {
    return {
      width: width.value,
      zIndex: zIndex.value
    };
  });
  const popperProps = index["default"](props, ctx);
  vue.watch(popperProps.visibility, (val) => {
    if (val) {
      zIndex.value = popupManager["default"].nextZIndex();
    }
    ctx.emit(val ? SHOW_EVENT : HIDE_EVENT);
  });
  return {
    ...popperProps,
    popperStyle
  };
}

exports.HIDE_EVENT = HIDE_EVENT;
exports.SHOW_EVENT = SHOW_EVENT;
exports["default"] = usePopover;
//# sourceMappingURL=usePopover.js.map
