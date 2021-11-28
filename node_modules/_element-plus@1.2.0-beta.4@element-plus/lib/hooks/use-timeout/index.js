'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useTimeout() {
  let timeoutHandle;
  vue.onBeforeUnmount(() => {
    clearTimeout(timeoutHandle);
  });
  return {
    registerTimeout: (fn, delay) => {
      clearTimeout(timeoutHandle);
      timeoutHandle = setTimeout(fn, delay);
    },
    cancelTimeout: () => {
      clearTimeout(timeoutHandle);
    }
  };
}

exports["default"] = useTimeout;
//# sourceMappingURL=index.js.map
