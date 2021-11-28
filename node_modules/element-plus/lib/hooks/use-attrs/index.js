'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var fromPairs = require('lodash/fromPairs');
var error = require('../../utils/error.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fromPairs__default = /*#__PURE__*/_interopDefaultLegacy(fromPairs);

const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
var useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  const instance = vue.getCurrentInstance();
  if (!instance) {
    error.debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
    return vue.computed(() => ({}));
  }
  return vue.computed(() => {
    var _a;
    return fromPairs__default["default"](Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};

exports["default"] = useAttrs;
//# sourceMappingURL=index.js.map
