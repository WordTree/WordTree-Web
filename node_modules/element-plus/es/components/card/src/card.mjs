import { buildProps, definePropType } from '../../../utils/props.mjs';

const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    default: ""
  }
});

export { cardProps };
//# sourceMappingURL=card.mjs.map
