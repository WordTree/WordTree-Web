'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icon = require('../../../utils/icon.js');
var props = require('../../../utils/props.js');

const alertProps = props.buildProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: props.keyOf(icon.TypeComponentsMap),
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: ["light", "dark"],
    default: "light"
  }
});
const alertEmits = {
  close: (evt) => evt instanceof MouseEvent
};

exports.alertEmits = alertEmits;
exports.alertProps = alertProps;
//# sourceMappingURL=alert.js.map
