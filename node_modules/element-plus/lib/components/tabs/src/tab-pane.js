'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const tabPaneProps = props.buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});

exports.tabPaneProps = tabPaneProps;
//# sourceMappingURL=tab-pane.js.map
