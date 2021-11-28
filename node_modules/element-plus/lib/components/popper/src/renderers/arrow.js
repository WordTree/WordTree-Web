'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function renderArrow(showArrow) {
  return showArrow ? vue.h("div", {
    ref: "arrowRef",
    class: "el-popper__arrow",
    "data-popper-arrow": ""
  }, null) : vue.h(vue.Comment, null, "");
}

exports["default"] = renderArrow;
//# sourceMappingURL=arrow.js.map
