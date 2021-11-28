'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var validators = require('../../../utils/validators.js');
var props = require('../../../utils/props.js');
var constants = require('../../../utils/constants.js');

const dialogProps = props.buildProps({
  appendToBody: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: props.definePropType(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ""
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    required: true
  },
  modalClass: String,
  width: {
    type: [String, Number],
    validator: validators.isValidWidthUnit
  },
  zIndex: {
    type: Number
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [constants.UPDATE_MODEL_EVENT]: (value) => typeof value === "boolean"
};

exports.dialogEmits = dialogEmits;
exports.dialogProps = dialogProps;
//# sourceMappingURL=dialog.js.map
