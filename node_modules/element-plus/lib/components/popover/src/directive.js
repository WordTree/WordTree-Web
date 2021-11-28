'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('../../../utils/dom.js');

const attachEvents = (el, binding, vnode) => {
  const _ref = binding.arg || binding.value;
  const popover = vnode.dirs[0].instance.$refs[_ref];
  if (popover) {
    popover.triggerRef = el;
    el.setAttribute("tabindex", popover.tabindex);
    Object.entries(popover.events).forEach(([eventName, e]) => {
      dom.on(el, eventName.toLowerCase().slice(2), e);
    });
  }
};
var PopoverDirective = {
  mounted(el, binding, vnode) {
    attachEvents(el, binding, vnode);
  },
  updated(el, binding, vnode) {
    attachEvents(el, binding, vnode);
  }
};
const VPopover = "popover";

exports.VPopover = VPopover;
exports["default"] = PopoverDirective;
//# sourceMappingURL=directive.js.map
