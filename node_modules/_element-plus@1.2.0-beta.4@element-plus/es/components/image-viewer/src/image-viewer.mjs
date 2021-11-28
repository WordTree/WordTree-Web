import { buildProps, definePropType, mutable } from '../../../utils/props.mjs';

const imageViewerProps = buildProps({
  urlList: {
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
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index) => typeof index === "number"
};

export { imageViewerEmits, imageViewerProps };
//# sourceMappingURL=image-viewer.mjs.map
