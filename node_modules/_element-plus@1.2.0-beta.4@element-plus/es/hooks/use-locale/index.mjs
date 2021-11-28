import { getCurrentInstance, computed, provide, ref, inject } from 'vue';
import defaultLang from '../../locale/lang/en.mjs';
import { buildProp, definePropType } from '../../utils/props.mjs';

const useLocaleProps = {
  locale: buildProp({
    type: definePropType(Object)
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
  const vm = getCurrentInstance();
  const props = vm.props;
  const locale = computed(() => props.locale || defaultLang);
  const lang = computed(() => locale.value.name);
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
  provide(LocaleInjectionKey, provides);
};
function template(str, option) {
  if (!str || !option)
    return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key];
  });
}
const localeProviderMaker = (locale = defaultLang) => {
  const lang = ref(locale.name);
  const localeRef = ref(locale);
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
  return inject(LocaleInjectionKey, localeObjCache || {
    lang: ref(defaultLang.name),
    locale: ref(defaultLang),
    t: (...args) => {
      const [path, option] = args;
      return translate(path, option, defaultLang);
    }
  });
};

export { LocaleInjectionKey, localeProviderMaker, useLocale, useLocaleInject, useLocaleProps };
//# sourceMappingURL=index.mjs.map
