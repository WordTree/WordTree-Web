import isServer from './isServer.mjs';

const resizeHandler = function(entries) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn();
      });
    }
  }
};
const addResizeListener = function(element, fn) {
  if (isServer || !element)
    return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};
const removeResizeListener = function(element, fn) {
  var _a;
  if (!element || !element.__resizeListeners__)
    return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    (_a = element.__ro__) == null ? void 0 : _a.disconnect();
  }
};

export { addResizeListener, removeResizeListener };
//# sourceMappingURL=resize-event.mjs.map
