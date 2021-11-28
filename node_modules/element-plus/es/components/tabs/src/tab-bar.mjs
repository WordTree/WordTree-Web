import { buildProps, definePropType, mutable } from '../../../utils/props.mjs';

const tabBar = buildProps({
  tabs: {
    type: definePropType(Array),
    default: () => mutable([])
  }
});

export { tabBar };
//# sourceMappingURL=tab-bar.mjs.map
