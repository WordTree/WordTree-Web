'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const notificationTypes = [
  "success",
  "info",
  "warning",
  "error"
];
const notificationProps = props.buildProps({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: props.definePropType([String, Object]),
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: props.definePropType([String, Object]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: props.definePropType(Function),
    default: () => void 0
  },
  onClose: {
    type: props.definePropType(Function),
    required: true
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...notificationTypes, ""],
    default: ""
  },
  zIndex: {
    type: Number,
    default: 0
  }
});
const notificationEmits = {
  destroy: () => true
};

exports.notificationEmits = notificationEmits;
exports.notificationProps = notificationProps;
exports.notificationTypes = notificationTypes;
//# sourceMappingURL=notification.js.map
