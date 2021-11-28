import { buildProps, definePropType } from '../../../utils/props.mjs';

const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});

export { iconProps };
//# sourceMappingURL=icon.mjs.map
