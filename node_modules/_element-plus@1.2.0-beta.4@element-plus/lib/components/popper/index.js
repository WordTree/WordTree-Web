'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./src/index.js');
var defaults = require('./src/use-popper/defaults.js');
require('./src/renderers/index.js');
var index = require('./src/use-popper/index.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue_type_script_lang.js');
var popper = require('./src/renderers/popper.js');
var trigger = require('./src/renderers/trigger.js');
var arrow = require('./src/renderers/arrow.js');

index_vue_vue_type_script_lang["default"].install = (app) => {
  app.component(index_vue_vue_type_script_lang["default"].name, index_vue_vue_type_script_lang["default"]);
};
const _Popper = index_vue_vue_type_script_lang["default"];
const ElPopper = _Popper;

exports.Effect = defaults.Effect;
exports.popperDefaultProps = defaults["default"];
exports.usePopper = index["default"];
exports.renderPopper = popper["default"];
exports.renderTrigger = trigger["default"];
exports.renderArrow = arrow["default"];
exports.ElPopper = ElPopper;
exports["default"] = _Popper;
//# sourceMappingURL=index.js.map
