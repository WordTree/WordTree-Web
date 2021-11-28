'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/table.js');
require('./src/tableColumn.js');
var table_vue_vue_type_script_lang = require('./src/table.vue_vue_type_script_lang.js');
var index = require('./src/table-column/index.js');

const ElTable = withInstall.withInstall(table_vue_vue_type_script_lang["default"], {
  TableColumn: index["default"]
});
const ElTableColumn = withInstall.withNoopInstall(index["default"]);

exports.ElTable = ElTable;
exports.ElTableColumn = ElTableColumn;
exports["default"] = ElTable;
//# sourceMappingURL=index.js.map
