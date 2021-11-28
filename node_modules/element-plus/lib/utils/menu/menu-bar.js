'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var menuItem = require('./menu-item.js');

class Menu {
  constructor(domNode) {
    this.domNode = domNode;
    this.init();
  }
  init() {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren, (child) => {
      if (child.nodeType === 1) {
        new menuItem["default"](child);
      }
    });
  }
}

exports["default"] = Menu;
//# sourceMappingURL=menu-bar.js.map
