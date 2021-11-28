'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/container.js');
require('./src/aside.js');
require('./src/footer.js');
require('./src/header.js');
require('./src/main.js');
var container_vue_vue_type_script_lang = require('./src/container.vue_vue_type_script_lang.js');
var aside_vue_vue_type_script_lang = require('./src/aside.vue_vue_type_script_lang.js');
var footer_vue_vue_type_script_lang = require('./src/footer.vue_vue_type_script_lang.js');
var header_vue_vue_type_script_lang = require('./src/header.vue_vue_type_script_lang.js');
var main_vue_vue_type_script_lang = require('./src/main.vue_vue_type_script_lang.js');

const ElContainer = withInstall.withInstall(container_vue_vue_type_script_lang["default"], {
  Aside: aside_vue_vue_type_script_lang["default"],
  Footer: footer_vue_vue_type_script_lang["default"],
  Header: header_vue_vue_type_script_lang["default"],
  Main: main_vue_vue_type_script_lang["default"]
});
const ElAside = withInstall.withNoopInstall(aside_vue_vue_type_script_lang["default"]);
const ElFooter = withInstall.withNoopInstall(footer_vue_vue_type_script_lang["default"]);
const ElHeader = withInstall.withNoopInstall(header_vue_vue_type_script_lang["default"]);
const ElMain = withInstall.withNoopInstall(main_vue_vue_type_script_lang["default"]);

exports.ElAside = ElAside;
exports.ElContainer = ElContainer;
exports.ElFooter = ElFooter;
exports.ElHeader = ElHeader;
exports.ElMain = ElMain;
exports["default"] = ElContainer;
//# sourceMappingURL=index.js.map
