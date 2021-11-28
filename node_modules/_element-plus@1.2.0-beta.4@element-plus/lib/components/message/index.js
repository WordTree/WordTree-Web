'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
var messageMethod = require('./src/message-method.js');
var message = require('./src/message.js');

const ElMessage = withInstall.withInstallFunction(messageMethod["default"], "$message");

exports.messageEmits = message.messageEmits;
exports.messageProps = message.messageProps;
exports.messageTypes = message.messageTypes;
exports.ElMessage = ElMessage;
exports["default"] = ElMessage;
//# sourceMappingURL=index.js.map
