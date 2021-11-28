'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var memo = require('lodash/memoize');
var memoOne = require('memoize-one');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var memo__default = /*#__PURE__*/_interopDefaultLegacy(memo);
var memoOne__default = /*#__PURE__*/_interopDefaultLegacy(memoOne);

const useCache = () => {
  const vm = vue.getCurrentInstance();
  const props = vm.proxy.$props;
  return vue.computed(() => {
    const _getItemStyleCache = (_, __, ___) => ({});
    return props.perfMode ? memo__default["default"](_getItemStyleCache) : memoOne__default["default"](_getItemStyleCache);
  });
};

exports.useCache = useCache;
//# sourceMappingURL=use-cache.js.map
