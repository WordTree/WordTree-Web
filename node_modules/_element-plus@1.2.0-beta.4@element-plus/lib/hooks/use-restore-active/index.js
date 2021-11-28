'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var useRestoreActive = (toggle, initialFocus) => {
  let previousActive;
  vue.watch(() => toggle.value, (val) => {
    var _a, _b;
    if (val) {
      previousActive = document.activeElement;
      if (vue.isRef(initialFocus)) {
        (_b = (_a = initialFocus.value).focus) == null ? void 0 : _b.call(_a);
      }
    } else {
      if (process.env.NODE_ENV === "testing") {
        previousActive.focus.call(previousActive);
      } else {
        previousActive.focus();
      }
    }
  });
};

exports["default"] = useRestoreActive;
//# sourceMappingURL=index.js.map
