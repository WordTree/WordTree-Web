import { getCurrentInstance, computed } from 'vue';
import memo from 'lodash/memoize';
import memoOne from 'memoize-one';

const useCache = () => {
  const vm = getCurrentInstance();
  const props = vm.proxy.$props;
  return computed(() => {
    const _getItemStyleCache = (_, __, ___) => ({});
    return props.perfMode ? memo(_getItemStyleCache) : memoOne(_getItemStyleCache);
  });
};

export { useCache };
//# sourceMappingURL=use-cache.mjs.map
