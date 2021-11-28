'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var dom = require('../../../utils/dom.js');
var popupManager = require('../../../utils/popup-manager.js');
var isServer = require('../../../utils/isServer.js');
var createLoadingComponent = require('./createLoadingComponent.js');

const defaults = {
  parent: null,
  background: "",
  svg: null,
  svgViewBox: null,
  spinner: false,
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ""
};
const globalLoadingOption = {
  fullscreenLoading: null
};
const addStyle = async (options, parent, instance) => {
  const maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition.value = dom.getStyle(document.body, "position");
    instance.originalOverflow.value = dom.getStyle(document.body, "overflow");
    maskStyle.zIndex = popupManager["default"].nextZIndex();
  } else if (options.body) {
    instance.originalPosition.value = dom.getStyle(document.body, "position");
    await vue.nextTick();
    ["top", "left"].forEach((property) => {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] = `${options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(dom.getStyle(document.body, `margin-${property}`), 10)}px`;
    });
    ["height", "width"].forEach((property) => {
      maskStyle[property] = `${options.target.getBoundingClientRect()[property]}px`;
    });
  } else {
    instance.originalPosition.value = dom.getStyle(parent, "position");
  }
  Object.keys(maskStyle).forEach((property) => {
    instance.$el.style[property] = maskStyle[property];
  });
};
const addClassList = (options, parent, instance) => {
  if (instance.originalPosition.value !== "absolute" && instance.originalPosition.value !== "fixed") {
    dom.addClass(parent, "el-loading-parent--relative");
  } else {
    dom.removeClass(parent, "el-loading-parent--relative");
  }
  if (options.fullscreen && options.lock) {
    dom.addClass(parent, "el-loading-parent--hidden");
  } else {
    dom.removeClass(parent, "el-loading-parent--hidden");
  }
};
const Loading = function(options = {}) {
  if (isServer["default"])
    return;
  options = {
    ...defaults,
    ...options
  };
  if (typeof options.target === "string") {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && globalLoadingOption.fullscreenLoading) {
    globalLoadingOption.fullscreenLoading.close();
  }
  const parent = options.body ? document.body : options.target;
  options.parent = parent;
  const instance = createLoadingComponent.createLoadingComponent({
    options,
    globalLoadingOption
  });
  addStyle(options, parent, instance);
  addClassList(options, parent, instance);
  options.parent.vLoadingAddClassList = () => {
    addClassList(options, parent, instance);
  };
  let loadingNumber = parent.getAttribute("loading-number");
  if (!loadingNumber) {
    loadingNumber = 1;
  } else {
    loadingNumber = Number.parseInt(loadingNumber) + 1;
  }
  parent.setAttribute("loading-number", loadingNumber.toString());
  parent.appendChild(instance.$el);
  vue.nextTick().then(() => {
    instance.visible.value = shared.hasOwn(options, "visible") ? options.visible : true;
  });
  if (options.fullscreen) {
    globalLoadingOption.fullscreenLoading = instance;
  }
  return instance;
};

exports["default"] = Loading;
//# sourceMappingURL=index.js.map
