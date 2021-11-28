'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const cardProps = props.buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: props.definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    default: ""
  }
});

exports.cardProps = cardProps;
//# sourceMappingURL=card.js.map
