'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
var index = require('./src/index.js');

const ElConfigProvider = withInstall.withInstall(index.ConfigProvider);

exports.ElConfigProvider = ElConfigProvider;
exports["default"] = ElConfigProvider;
//# sourceMappingURL=index.js.map
