'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/checkbox.js');
require('./src/checkbox-button.js');
require('./src/checkbox-group.js');
var checkbox_vue_vue_type_script_lang = require('./src/checkbox.vue_vue_type_script_lang.js');
var checkboxButton_vue_vue_type_script_lang = require('./src/checkbox-button.vue_vue_type_script_lang.js');
var checkboxGroup_vue_vue_type_script_lang = require('./src/checkbox-group.vue_vue_type_script_lang.js');

const ElCheckbox = withInstall.withInstall(checkbox_vue_vue_type_script_lang["default"], {
  CheckboxButton: checkboxButton_vue_vue_type_script_lang["default"],
  CheckboxGroup: checkboxGroup_vue_vue_type_script_lang["default"]
});
const ElCheckboxButton = withInstall.withNoopInstall(checkboxButton_vue_vue_type_script_lang["default"]);
const ElCheckboxGroup = withInstall.withNoopInstall(checkboxGroup_vue_vue_type_script_lang["default"]);

exports.ElCheckbox = ElCheckbox;
exports.ElCheckboxButton = ElCheckboxButton;
exports.ElCheckboxGroup = ElCheckboxGroup;
exports["default"] = ElCheckbox;
//# sourceMappingURL=index.js.map
