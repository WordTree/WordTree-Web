'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../utils/dom.js');

var usePreventGlobal = (indicator, evt, cb) => {
  const prevent = (e) => {
    if (cb(e)) {
      e.stopImmediatePropagation();
    }
  };
  vue.watch(() => indicator.value, (val) => {
    if (val) {
      dom.on(document, evt, prevent, true);
    } else {
      dom.off(document, evt, prevent, true);
    }
  }, { immediate: true });
};

exports["default"] = usePreventGlobal;
//# sourceMappingURL=index.js.map
