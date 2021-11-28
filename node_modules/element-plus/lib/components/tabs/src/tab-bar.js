'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const tabBar = props.buildProps({
  tabs: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  }
});

exports.tabBar = tabBar;
//# sourceMappingURL=tab-bar.js.map
