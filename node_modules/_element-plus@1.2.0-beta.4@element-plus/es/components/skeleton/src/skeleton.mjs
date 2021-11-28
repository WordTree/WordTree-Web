import { buildProps } from '../../../utils/props.mjs';

const skeletonProps = buildProps({
  animated: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: true
  },
  throttle: {
    type: Number
  }
});

export { skeletonProps };
//# sourceMappingURL=skeleton.mjs.map
