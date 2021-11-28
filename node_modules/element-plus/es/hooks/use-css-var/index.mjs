import { computed, unref, provide, ref, onMounted, isRef, watch, onUnmounted, inject } from 'vue';

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
  const elRef = computed(() => {
    var _a;
    return unref(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  const themeVars = useThemeVars();
  const customVars = { ...themeVars, ...unref(vars) };
  provide(themeVarsKey, ref(customVars));
  onMounted(() => {
    isRef(vars) ? stopWatchCssVar = watch(vars, (val) => {
      setVars(elRef.value, {
        ...unref(themeVars),
        ...val
      });
    }, {
      immediate: true,
      deep: true
    }) : setVars(elRef.value, {
      ...unref(themeVars),
      ...vars
    });
  });
  onUnmounted(() => stopWatchCssVar && stopWatchCssVar());
}
const useThemeVars = () => {
  const themeVars = inject(themeVarsKey, {});
  return themeVars;
};

export { themeVarsKey, useCssVar, useThemeVars };
//# sourceMappingURL=index.mjs.map
