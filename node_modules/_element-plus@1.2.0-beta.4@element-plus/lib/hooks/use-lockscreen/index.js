'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var scrollbarWidth = require('../../utils/scrollbar-width.js');
var error = require('../../utils/error.js');
var dom = require('../../utils/dom.js');

var useLockScreen = (trigger) => {
  if (!vue.isRef(trigger)) {
    error.throwError("[useLockScreen]", "You need to pass a ref param to this function");
  }
  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyPaddingRight = "0";
  let computedBodyPaddingRight = 0;
  vue.onUnmounted(() => {
    cleanup();
  });
  const cleanup = () => {
    dom.removeClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight;
    }
  };
  vue.watch(trigger, (val) => {
    if (val) {
      withoutHiddenClass = !dom.hasClass(document.body, "el-popup-parent--hidden");
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight;
        computedBodyPaddingRight = parseInt(dom.getStyle(document.body, "paddingRight"), 10);
      }
      scrollBarWidth = scrollbarWidth["default"]();
      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
      const bodyOverflowY = dom.getStyle(document.body, "overflowY");
      if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
        document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarWidth}px`;
      }
      dom.addClass(document.body, "el-popup-parent--hidden");
    } else {
      cleanup();
    }
  });
};

exports["default"] = useLockScreen;
//# sourceMappingURL=index.js.map
