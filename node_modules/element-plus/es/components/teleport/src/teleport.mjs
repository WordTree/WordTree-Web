import { buildProps, definePropType } from '../../../utils/props.mjs';

const elTeleportProps = buildProps({
  container: {
    type: definePropType([String, Object]),
    default: "body"
  },
  style: {
    type: definePropType([String, Array, Object])
  },
  zIndex: {
    type: String,
    default: "2000"
  }
});

export { elTeleportProps };
//# sourceMappingURL=teleport.mjs.map
