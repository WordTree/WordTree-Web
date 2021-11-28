'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/image-viewer2.js');
var imageViewer = require('./src/image-viewer.js');
var imageViewer_vue_vue_type_script_lang = require('./src/image-viewer.vue_vue_type_script_lang.js');

const ElImageViewer = withInstall.withInstall(imageViewer_vue_vue_type_script_lang["default"]);

exports.imageViewerEmits = imageViewer.imageViewerEmits;
exports.imageViewerProps = imageViewer.imageViewerProps;
exports.ElImageViewer = ElImageViewer;
exports["default"] = ElImageViewer;
//# sourceMappingURL=index.js.map
