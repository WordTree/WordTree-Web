'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function hGutter() {
  return vue.h("col", {
    name: "gutter"
  });
}
function hColgroup(columns, hasGutter = false) {
  return vue.h("colgroup", {}, [
    ...columns.map((column) => vue.h("col", {
      name: column.id,
      key: column.id
    })),
    hasGutter && hGutter()
  ]);
}

exports.hColgroup = hColgroup;
exports.hGutter = hGutter;
//# sourceMappingURL=h-helper.js.map
