'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../utils/dom.js');
var aria = require('../../utils/aria.js');
var isServer = require('../../utils/isServer.js');

const modalStack = [];
const closeModal = (e) => {
  if (modalStack.length === 0)
    return;
  if (e.code === aria.EVENT_CODE.esc) {
    e.stopPropagation();
    const topModal = modalStack[modalStack.length - 1];
    topModal.handleClose();
  }
};
var useModal = (instance, visibleRef) => {
  vue.watch(() => visibleRef.value, (val) => {
    if (val) {
      modalStack.push(instance);
    } else {
      modalStack.splice(modalStack.findIndex((modal) => modal === instance), 1);
    }
  });
};
if (!isServer["default"]) {
  dom.on(document, "keydown", closeModal);
}

exports["default"] = useModal;
//# sourceMappingURL=index.js.map
