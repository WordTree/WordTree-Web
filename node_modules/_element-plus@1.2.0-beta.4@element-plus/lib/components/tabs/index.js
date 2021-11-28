'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
var tabs = require('./src/tabs.js');
require('./src/tab-pane2.js');
var tabBar = require('./src/tab-bar.js');
var tabNav = require('./src/tab-nav.js');
var tabPane = require('./src/tab-pane.js');
var tabPane_vue_vue_type_script_lang = require('./src/tab-pane.vue_vue_type_script_lang.js');

const ElTabs = withInstall.withInstall(tabs["default"], {
  TabPane: tabPane_vue_vue_type_script_lang["default"]
});
const ElTabPane = withInstall.withNoopInstall(tabPane_vue_vue_type_script_lang["default"]);

exports.tabsEmits = tabs.tabsEmits;
exports.tabsProps = tabs.tabsProps;
exports.tabBar = tabBar.tabBar;
exports.tabNavProps = tabNav.tabNavProps;
exports.tabPaneProps = tabPane.tabPaneProps;
exports.ElTabPane = ElTabPane;
exports.ElTabs = ElTabs;
exports["default"] = ElTabs;
//# sourceMappingURL=index.js.map
