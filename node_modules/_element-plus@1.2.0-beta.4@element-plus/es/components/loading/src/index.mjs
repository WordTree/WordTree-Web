import { nextTick } from 'vue';
import { hasOwn } from '@vue/shared';
import { getStyle, addClass, removeClass } from '../../../utils/dom.mjs';
import PopupManager from '../../../utils/popup-manager.mjs';
import isServer from '../../../utils/isServer.mjs';
import { createLoadingComponent } from './createLoadingComponent.mjs';

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
    instance.originalPosition.value = getStyle(document.body, "position");
    instance.originalOverflow.value = getStyle(document.body, "overflow");
    maskStyle.zIndex = PopupManager.nextZIndex();
  } else if (options.body) {
    instance.originalPosition.value = getStyle(document.body, "position");
    await nextTick();
    ["top", "left"].forEach((property) => {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] = `${options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(getStyle(document.body, `margin-${property}`), 10)}px`;
    });
    ["height", "width"].forEach((property) => {
      maskStyle[property] = `${options.target.getBoundingClientRect()[property]}px`;
    });
  } else {
    instance.originalPosition.value = getStyle(parent, "position");
  }
  Object.keys(maskStyle).forEach((property) => {
    instance.$el.style[property] = maskStyle[property];
  });
};
const addClassList = (options, parent, instance) => {
  if (instance.originalPosition.value !== "absolute" && instance.originalPosition.value !== "fixed") {
    addClass(parent, "el-loading-parent--relative");
  } else {
    removeClass(parent, "el-loading-parent--relative");
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, "el-loading-parent--hidden");
  } else {
    removeClass(parent, "el-loading-parent--hidden");
  }
};
const Loading = function(options = {}) {
  if (isServer)
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
  const instance = createLoadingComponent({
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
  nextTick().then(() => {
    instance.visible.value = hasOwn(options, "visible") ? options.visible : true;
  });
  if (options.fullscreen) {
    globalLoadingOption.fullscreenLoading = instance;
  }
  return instance;
};

export { Loading as default };
//# sourceMappingURL=index.mjs.map
