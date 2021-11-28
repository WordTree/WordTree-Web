'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/index.js');
var descriptionItem = require('./src/description-item.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue_type_script_lang.js');

const ElDescriptions = withInstall.withInstall(index_vue_vue_type_script_lang["default"], {
  DescriptionsItem: descriptionItem["default"]
});
const ElDescriptionsItem = withInstall.withNoopInstall(descriptionItem["default"]);

exports.ElDescriptions = ElDescriptions;
exports.ElDescriptionsItem = ElDescriptionsItem;
exports["default"] = ElDescriptions;
//# sourceMappingURL=index.js.map
