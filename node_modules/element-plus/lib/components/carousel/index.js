'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/main.js');
require('./src/item.js');
var main_vue_vue_type_script_lang = require('./src/main.vue_vue_type_script_lang.js');
var item_vue_vue_type_script_lang = require('./src/item.vue_vue_type_script_lang.js');

const ElCarousel = withInstall.withInstall(main_vue_vue_type_script_lang["default"], {
  CarouselItem: item_vue_vue_type_script_lang["default"]
});
const ElCarouselItem = withInstall.withNoopInstall(item_vue_vue_type_script_lang["default"]);

exports.ElCarousel = ElCarousel;
exports.ElCarouselItem = ElCarouselItem;
exports["default"] = ElCarousel;
//# sourceMappingURL=index.js.map
