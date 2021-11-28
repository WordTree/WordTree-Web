import { buildProps, definePropType, mutable } from '../../../utils/props.mjs';
import { isNumber } from '../../../utils/util.mjs';

const imageProps = buildProps({
  appendToBody: {
    type: Boolean,
    default: false
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  lazy: {
    type: Boolean,
    default: false
  },
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  },
  initialIndex: {
    type: Number,
    default: 0
  }
});
const imageEmits = {
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber(val),
  close: () => true
};

export { imageEmits, imageProps };
//# sourceMappingURL=image.mjs.map
