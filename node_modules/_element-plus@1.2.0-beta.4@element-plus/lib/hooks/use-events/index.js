'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../utils/dom.js');

var index = (el, events) => {
  vue.watch(el, (val) => {
    if (val) {
      events.forEach(({ name, handler }) => {
        dom.on(el.value, name, handler);
      });
    } else {
      events.forEach(({ name, handler }) => {
        dom.off(el.value, name, handler);
      });
    }
  });
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
