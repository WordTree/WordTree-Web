'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const imageViewerProps = props.buildProps({
  urlList: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
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

exports.imageViewerEmits = imageViewerEmits;
exports.imageViewerProps = imageViewerProps;
//# sourceMappingURL=image-viewer.js.map
