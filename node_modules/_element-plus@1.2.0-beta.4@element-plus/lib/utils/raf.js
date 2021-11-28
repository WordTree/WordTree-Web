'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isServer = require('./isServer.js');

exports.rAF = (fn) => setTimeout(fn, 16);
exports.cAF = (handle) => clearTimeout(handle);
if (!isServer["default"]) {
  exports.rAF = (fn) => window.requestAnimationFrame(fn);
  exports.cAF = (handle) => window.cancelAnimationFrame(handle);
}
//# sourceMappingURL=raf.js.map
