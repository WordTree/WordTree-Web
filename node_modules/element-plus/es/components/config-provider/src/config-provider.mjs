import '../../../hooks/index.mjs';
import { buildProp, definePropType, mutable } from '../../../utils/props.mjs';
import { useLocaleProps } from '../../../hooks/use-locale/index.mjs';

const configProviderProps = {
  ...useLocaleProps,
  button: buildProp({
    type: definePropType(Object),
    default: () => {
      return mutable({
        autoInsertSpace: true
      });
    }
  })
};

export { configProviderProps };
//# sourceMappingURL=config-provider.mjs.map
