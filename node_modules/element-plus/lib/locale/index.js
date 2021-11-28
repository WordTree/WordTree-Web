'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var error = require('../utils/error.js');
var en = require('./lang/en.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

let lang = en["default"];
let i18nHandler = null;
const i18n = (fn) => {
  i18nHandler = fn;
};
const restoreHandler = () => i18nHandler = defaultTranslator;
function template(str, option) {
  if (!str || !option)
    return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key];
  });
}
const defaultTranslator = (...args) => {
  const [path, option] = args;
  let value;
  const array = path.split(".");
  let current = lang;
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1)
      return template(value, option);
    if (!value)
      return "";
    current = value;
  }
};
const t = (...args) => {
  if (i18nHandler) {
    const translation = i18nHandler(...args);
    return translation || defaultTranslator(...args);
  }
  return defaultTranslator(...args);
};
const use = (l) => {
  error.debugWarn("deprecation", `:
      The previous i18n usage is deprecated please update to
      the new one to get reactive i18n translations, refer to:
      https://element-plus.org/#/en-US/component/i18n
    `);
  lang = l || lang;
  if (lang.name) {
    dayjs__default["default"].locale(lang.name);
  }
};
const setLocale = use;

exports.i18n = i18n;
exports.restoreHandler = restoreHandler;
exports.setLocale = setLocale;
exports.t = t;
exports.use = use;
//# sourceMappingURL=index.js.map
