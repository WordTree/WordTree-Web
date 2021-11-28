'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/index.js');
require('./src/item.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue_type_script_lang.js');
var item_vue_vue_type_script_lang = require('./src/item.vue_vue_type_script_lang.js');

const ElTimeline = withInstall.withInstall(index_vue_vue_type_script_lang["default"], {
  TimelineItem: item_vue_vue_type_script_lang["default"]
});
const ElTimelineItem = withInstall.withNoopInstall(item_vue_vue_type_script_lang["default"]);

exports.ElTimeline = ElTimeline;
exports.ElTimelineItem = ElTimelineItem;
exports["default"] = ElTimeline;
//# sourceMappingURL=index.js.map
