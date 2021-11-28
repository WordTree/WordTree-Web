'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./src/index.js');
var types = require('./src/types.js');
var config = require('./src/config.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue_type_script_lang.js');

index_vue_vue_type_script_lang["default"].install = (app) => {
  app.component(index_vue_vue_type_script_lang["default"].name, index_vue_vue_type_script_lang["default"]);
};
const _CascaderPanel = index_vue_vue_type_script_lang["default"];
const ElCascaderPanel = _CascaderPanel;

exports.CASCADER_PANEL_INJECTION_KEY = types.CASCADER_PANEL_INJECTION_KEY;
exports.ExpandTrigger = types.ExpandTrigger;
exports.CommonProps = config.CommonProps;
exports.DefaultProps = config.DefaultProps;
exports.useCascaderConfig = config.useCascaderConfig;
exports.ElCascaderPanel = ElCascaderPanel;
exports["default"] = _CascaderPanel;
//# sourceMappingURL=index.js.map
