'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/select.js');
require('./src/option.js');
require('./src/option-group.js');
var token = require('./src/token.js');
var select_vue_vue_type_script_lang = require('./src/select.vue_vue_type_script_lang.js');
var option_vue_vue_type_script_lang = require('./src/option.vue_vue_type_script_lang.js');
var optionGroup_vue_vue_type_script_lang = require('./src/option-group.vue_vue_type_script_lang.js');

const ElSelect = withInstall.withInstall(select_vue_vue_type_script_lang["default"], {
  Option: option_vue_vue_type_script_lang["default"],
  OptionGroup: optionGroup_vue_vue_type_script_lang["default"]
});
const ElOption = withInstall.withNoopInstall(option_vue_vue_type_script_lang["default"]);
const ElOptionGroup = withInstall.withNoopInstall(optionGroup_vue_vue_type_script_lang["default"]);

exports.selectGroupKey = token.selectGroupKey;
exports.selectKey = token.selectKey;
exports.ElOption = ElOption;
exports.ElOptionGroup = ElOptionGroup;
exports.ElSelect = ElSelect;
exports["default"] = ElSelect;
//# sourceMappingURL=index.js.map
