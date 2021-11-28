'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useFocus = (el) => {
  return {
    focus: () => {
      var _a, _b;
      (_b = (_a = el.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
  };
};

exports["default"] = useFocus;
//# sourceMappingURL=index.js.map
