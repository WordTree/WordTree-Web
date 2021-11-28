'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const breadcrumbItemProps = props.buildProps({
  to: {
    type: props.definePropType([String, Object]),
    default: ""
  },
  replace: {
    type: Boolean,
    default: false
  }
});

exports.breadcrumbItemProps = breadcrumbItemProps;
//# sourceMappingURL=breadcrumb-item.js.map
