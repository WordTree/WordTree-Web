'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icons = require('@element-plus/icons');

const pageHeaderProps = {
  icon: {
    type: [String, Object],
    default: icons.Back
  },
  title: String,
  content: {
    type: String,
    default: ""
  }
};
const pageHeaderEmits = {
  back: () => true
};

exports.pageHeaderEmits = pageHeaderEmits;
exports.pageHeaderProps = pageHeaderProps;
//# sourceMappingURL=page-header.js.map
