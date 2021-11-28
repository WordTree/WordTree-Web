import { defineComponent, provide } from 'vue';
import '../../../hooks/index.mjs';
import '../../../tokens/index.mjs';
import { configProviderProps } from './config-provider.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { configProviderContextKey } from '../../../tokens/config-provider.mjs';

const ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    useLocale();
    provide(configProviderContextKey, props);
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});

export { ConfigProvider };
//# sourceMappingURL=index.mjs.map
