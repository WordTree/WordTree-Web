import { isRef, onUnmounted, watch } from 'vue';
import scrollbarWidth from '../../utils/scrollbar-width.mjs';
import { throwError } from '../../utils/error.mjs';
import { removeClass, hasClass, getStyle, addClass } from '../../utils/dom.mjs';

var useLockScreen = (trigger) => {
  if (!isRef(trigger)) {
    throwError("[useLockScreen]", "You need to pass a ref param to this function");
  }
  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyPaddingRight = "0";
  let computedBodyPaddingRight = 0;
  onUnmounted(() => {
    cleanup();
  });
  const cleanup = () => {
    removeClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight;
    }
  };
  watch(trigger, (val) => {
    if (val) {
      withoutHiddenClass = !hasClass(document.body, "el-popup-parent--hidden");
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight;
        computedBodyPaddingRight = parseInt(getStyle(document.body, "paddingRight"), 10);
      }
      scrollBarWidth = scrollbarWidth();
      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
      const bodyOverflowY = getStyle(document.body, "overflowY");
      if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
        document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarWidth}px`;
      }
      addClass(document.body, "el-popup-parent--hidden");
    } else {
      cleanup();
    }
  });
};

export { useLockScreen as default };
//# sourceMappingURL=index.mjs.map
