'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var en = require('../../locale/lang/en.js');
var props = require('../../utils/props.js');

const useLocaleProps = {
  locale: props.buildProp({
    type: props.definePropType(Object)
  })
};
const LocaleInjectionKey = "ElLocaleInjection";
let localeObjCache;
function translate(path, option, current) {
  const paths = path.split(".");
  let value;
  for (let i = 0, j = paths.length; i < j; i++) {
    const property = paths[i];
    value = current[property];
    if (i === j - 1)
      return template(value, option);
    if (!value)
      return "";
    current = value;
  }
}
const useLocale = () => {
  const vm = vue.getCurrentInstance();
  const props = vm.props;
  const locale = vue.computed(() => props.locale || en["default"]);
  const lang = vue.computed(() => locale.value.name);
  const _translator = (...args) => {
    const [path, option] = args;
    return translate(path, option, locale.value);
  };
  const t = (...args) => {
    return _translator(...args);
  };
  const provides = {
    locale,
    lang,
    t
  };
  localeObjCache = provides;
  vue.provide(LocaleInjectionKey, provides);
};
function template(str, option) {
  if (!str || !option)
    return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key];
  });
}
const localeProviderMaker = (locale = en["default"]) => {
  const lang = vue.ref(locale.name);
  const localeRef = vue.ref(locale);
  return {
    lang,
    locale: localeRef,
    t: (...args) => {
      const [path, option] = args;
      return translate(path, option, localeRef.value);
    }
  };
};
const useLocaleInject = () => {
  return vue.inject(LocaleInjectionKey, localeObjCache || {
    lang: vue.ref(en["default"].name),
    locale: vue.ref(en["default"]),
    t: (...args) => {
      const [path, option] = args;
      return translate(path, option, en["default"]);
    }
  });
};

exports.LocaleInjectionKey = LocaleInjectionKey;
exports.localeProviderMaker = localeProviderMaker;
exports.useLocale = useLocale;
exports.useLocaleInject = useLocaleInject;
exports.useLocaleProps = useLocaleProps;
//# sourceMappingURL=index.js.map
