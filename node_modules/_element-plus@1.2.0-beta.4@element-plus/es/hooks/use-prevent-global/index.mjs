import { watch } from 'vue';
import { on, off } from '../../utils/dom.mjs';

var usePreventGlobal = (indicator, evt, cb) => {
  const prevent = (e) => {
    if (cb(e)) {
      e.stopImmediatePropagation();
    }
  };
  watch(() => indicator.value, (val) => {
    if (val) {
      on(document, evt, prevent, true);
    } else {
      off(document, evt, prevent, true);
    }
  }, { immediate: true });
};

export { usePreventGlobal as default };
//# sourceMappingURL=index.mjs.map
