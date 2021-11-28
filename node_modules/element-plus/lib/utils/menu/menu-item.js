'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var aria = require('../aria.js');
var submenu = require('./submenu.js');

class MenuItem {
  constructor(domNode) {
    this.domNode = domNode;
    this.submenu = null;
    this.submenu = null;
    this.init();
  }
  init() {
    this.domNode.setAttribute("tabindex", "0");
    const menuChild = this.domNode.querySelector(".el-menu");
    if (menuChild) {
      this.submenu = new submenu["default"](this, menuChild);
    }
    this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (event) => {
      let prevDef = false;
      switch (event.code) {
        case aria.EVENT_CODE.down: {
          aria.triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(0);
          prevDef = true;
          break;
        }
        case aria.EVENT_CODE.up: {
          aria.triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
          prevDef = true;
          break;
        }
        case aria.EVENT_CODE.tab: {
          aria.triggerEvent(event.currentTarget, "mouseleave");
          break;
        }
        case aria.EVENT_CODE.enter:
        case aria.EVENT_CODE.space: {
          prevDef = true;
          event.currentTarget.click();
          break;
        }
      }
      if (prevDef) {
        event.preventDefault();
      }
    });
  }
}

exports["default"] = MenuItem;
//# sourceMappingURL=menu-item.js.map
