'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');
var directive = require('./src/directive.js');
require('./src/loading.type.js');

const ElLoading = {
  install(app) {
    app.directive("loading", directive["default"]);
    app.config.globalProperties.$loading = index["default"];
  },
  directive: directive["default"],
  service: index["default"]
};
const ElLoadingDirective = directive["default"];
const ElLoadingService = index["default"];

exports.ElLoading = ElLoading;
exports.ElLoadingDirective = ElLoadingDirective;
exports.ElLoadingService = ElLoadingService;
exports["default"] = ElLoading;
//# sourceMappingURL=index.js.map
