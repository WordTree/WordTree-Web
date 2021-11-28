'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const breadcrumbProps = props.buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: props.definePropType([String, Object]),
    default: ""
  }
});

exports.breadcrumbProps = breadcrumbProps;
//# sourceMappingURL=breadcrumb.js.map
