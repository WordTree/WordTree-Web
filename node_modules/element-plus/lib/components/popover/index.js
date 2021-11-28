'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./src/index.js');
var directive = require('./src/directive.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue_type_script_lang.js');

index_vue_vue_type_script_lang["default"].install = (app) => {
  app.component(index_vue_vue_type_script_lang["default"].name, index_vue_vue_type_script_lang["default"]);
};
directive["default"].install = (app) => {
  app.directive(directive.VPopover, directive["default"]);
};
const _PopoverDirective = directive["default"];
index_vue_vue_type_script_lang["default"].directive = _PopoverDirective;
const _Popover = index_vue_vue_type_script_lang["default"];
const ElPopover = _Popover;
const ElPopoverDirective = _PopoverDirective;

exports.ElPopover = ElPopover;
exports.ElPopoverDirective = ElPopoverDirective;
exports["default"] = _Popover;
//# sourceMappingURL=index.js.map
