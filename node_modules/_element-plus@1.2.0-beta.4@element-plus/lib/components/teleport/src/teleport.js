'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const elTeleportProps = props.buildProps({
  container: {
    type: props.definePropType([String, Object]),
    default: "body"
  },
  style: {
    type: props.definePropType([String, Array, Object])
  },
  zIndex: {
    type: String,
    default: "2000"
  }
});

exports.elTeleportProps = elTeleportProps;
//# sourceMappingURL=teleport.js.map
