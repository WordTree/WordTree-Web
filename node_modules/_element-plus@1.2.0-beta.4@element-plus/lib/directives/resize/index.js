'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resizeEvent = require('../../utils/resize-event.js');

const Resize = {
  beforeMount(el, binding) {
    el._handleResize = () => {
      var _a;
      el && ((_a = binding.value) == null ? void 0 : _a.call(binding, el));
    };
    resizeEvent.addResizeListener(el, el._handleResize);
  },
  beforeUnmount(el) {
    resizeEvent.removeResizeListener(el, el._handleResize);
  }
};

exports["default"] = Resize;
//# sourceMappingURL=index.js.map
