'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/form.js');
require('./src/form-item.js');
var form_vue_vue_type_script_lang = require('./src/form.vue_vue_type_script_lang.js');
var formItem_vue_vue_type_script_lang = require('./src/form-item.vue_vue_type_script_lang.js');

const ElForm = withInstall.withInstall(form_vue_vue_type_script_lang["default"], {
  FormItem: formItem_vue_vue_type_script_lang["default"]
});
const ElFormItem = withInstall.withNoopInstall(formItem_vue_vue_type_script_lang["default"]);

exports.ElForm = ElForm;
exports.ElFormItem = ElFormItem;
exports["default"] = ElForm;
//# sourceMappingURL=index.js.map
