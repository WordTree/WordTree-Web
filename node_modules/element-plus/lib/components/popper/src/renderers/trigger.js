'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var error = require('../../../../utils/error.js');
var vnode = require('../../../../utils/vnode.js');

function renderTrigger(trigger, extraProps) {
  const firstElement = vnode.getFirstValidNode(trigger, 1);
  if (!firstElement)
    error.throwError("renderTrigger", "trigger expects single rooted node");
  return vue.cloneVNode(firstElement, extraProps, true);
}

exports["default"] = renderTrigger;
//# sourceMappingURL=trigger.js.map
