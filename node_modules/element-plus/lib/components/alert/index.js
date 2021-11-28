'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/alert2.js');
var alert = require('./src/alert.js');
var alert_vue_vue_type_script_lang = require('./src/alert.vue_vue_type_script_lang.js');

const ElAlert = withInstall.withInstall(alert_vue_vue_type_script_lang["default"]);

exports.alertEmits = alert.alertEmits;
exports.alertProps = alert.alertProps;
exports.ElAlert = ElAlert;
exports["default"] = ElAlert;
//# sourceMappingURL=index.js.map
