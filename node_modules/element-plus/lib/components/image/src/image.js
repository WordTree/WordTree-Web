'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');
var util = require('../../../utils/util.js');

const imageProps = props.buildProps({
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
    type: props.definePropType([String, Object])
  },
  previewSrcList: {
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
  }
});
const imageEmits = {
  error: (evt) => evt instanceof Event,
  switch: (val) => util.isNumber(val),
  close: () => true
};

exports.imageEmits = imageEmits;
exports.imageProps = imageProps;
//# sourceMappingURL=image.js.map
