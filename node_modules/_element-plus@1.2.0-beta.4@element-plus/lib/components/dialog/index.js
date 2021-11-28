'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/dialog2.js');
var useDialog = require('./src/use-dialog.js');
var dialog = require('./src/dialog.js');
var dialog_vue_vue_type_script_lang = require('./src/dialog.vue_vue_type_script_lang.js');

const ElDialog = withInstall.withInstall(dialog_vue_vue_type_script_lang["default"]);

exports.useDialog = useDialog.useDialog;
exports.dialogEmits = dialog.dialogEmits;
exports.dialogProps = dialog.dialogProps;
exports.ElDialog = ElDialog;
exports["default"] = ElDialog;
//# sourceMappingURL=index.js.map
