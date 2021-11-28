'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/collapse.js');
require('./src/collapse-item.js');
var collapse_vue_vue_type_script_lang = require('./src/collapse.vue_vue_type_script_lang.js');
var collapseItem_vue_vue_type_script_lang = require('./src/collapse-item.vue_vue_type_script_lang.js');

const ElCollapse = withInstall.withInstall(collapse_vue_vue_type_script_lang["default"], {
  CollapseItem: collapseItem_vue_vue_type_script_lang["default"]
});
const ElCollapseItem = withInstall.withNoopInstall(collapseItem_vue_vue_type_script_lang["default"]);

exports.ElCollapse = ElCollapse;
exports.ElCollapseItem = ElCollapseItem;
exports["default"] = ElCollapse;
//# sourceMappingURL=index.js.map
