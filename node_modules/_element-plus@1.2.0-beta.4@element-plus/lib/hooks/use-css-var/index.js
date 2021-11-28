'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const VAR_PREFIX = "--el-";
const setVars = (target, val) => {
  Object.keys(val).forEach((key) => {
    if (key.startsWith(VAR_PREFIX)) {
      target == null ? void 0 : target.style.setProperty(key, val[key]);
    } else {
      target == null ? void 0 : target.style.setProperty(VAR_PREFIX + key, val[key]);
    }
  });
};
const themeVarsKey = "themeVars";
function useCssVar(vars, target) {
  let stopWatchCssVar = null;
  const elRef = vue.computed(() => {
    var _a;
    return vue.unref(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  const themeVars = useThemeVars();
  const customVars = { ...themeVars, ...vue.unref(vars) };
  vue.provide(themeVarsKey, vue.ref(customVars));
  vue.onMounted(() => {
    vue.isRef(vars) ? stopWatchCssVar = vue.watch(vars, (val) => {
      setVars(elRef.value, {
        ...vue.unref(themeVars),
        ...val
      });
    }, {
      immediate: true,
      deep: true
    }) : setVars(elRef.value, {
      ...vue.unref(themeVars),
      ...vars
    });
  });
  vue.onUnmounted(() => stopWatchCssVar && stopWatchCssVar());
}
const useThemeVars = () => {
  const themeVars = vue.inject(themeVarsKey, {});
  return themeVars;
};

exports.themeVarsKey = themeVarsKey;
exports.useCssVar = useCssVar;
exports.useThemeVars = useThemeVars;
//# sourceMappingURL=index.js.map
