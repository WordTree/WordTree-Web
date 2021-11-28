import { onMounted, getCurrentInstance } from 'vue';
import { debugWarn } from '../../utils/error.mjs';
import { kebabCase } from '../../utils/util.mjs';

const useMigrating = function() {
  onMounted(() => {
    var _a;
    const instance = getCurrentInstance();
    if (process.env.NODE_ENV === "production")
      return;
    if (!instance.vnode)
      return;
    const { props = {} } = getMigratingConfig();
    const { data } = instance;
    const definedProps = data.attrs || {};
    for (let propName in definedProps) {
      propName = kebabCase(propName);
      if (props[propName]) {
        debugWarn("Element Migrating", `[${(_a = instance.proxy) == null ? void 0 : _a.$options.name}][Attribute]: ${props[propName]}`);
      }
    }
  });
  const getMigratingConfig = function() {
    return {
      props: {},
      events: {}
    };
  };
  return {
    getMigratingConfig
  };
};

export { useMigrating as default };
//# sourceMappingURL=index.mjs.map
