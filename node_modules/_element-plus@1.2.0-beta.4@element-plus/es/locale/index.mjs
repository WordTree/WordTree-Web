import dayjs from 'dayjs';
import { debugWarn } from '../utils/error.mjs';
import defaultLang from './lang/en.mjs';

let lang = defaultLang;
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
  debugWarn("deprecation", `:
      The previous i18n usage is deprecated please update to
      the new one to get reactive i18n translations, refer to:
      https://element-plus.org/#/en-US/component/i18n
    `);
  lang = l || lang;
  if (lang.name) {
    dayjs.locale(lang.name);
  }
};
const setLocale = use;

export { i18n, restoreHandler, setLocale, t, use };
//# sourceMappingURL=index.mjs.map
