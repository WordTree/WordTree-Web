'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icons = require('@element-plus/icons');
var props = require('./props.js');

const iconPropType = props.definePropType([String, Object]);
const CloseComponents = {
  Close: icons.Close
};
const TypeComponents = {
  Close: icons.Close,
  SuccessFilled: icons.SuccessFilled,
  InfoFilled: icons.InfoFilled,
  WarningFilled: icons.WarningFilled,
  CircleCloseFilled: icons.CircleCloseFilled
};
const TypeComponentsMap = {
  success: icons.SuccessFilled,
  warning: icons.WarningFilled,
  error: icons.CircleCloseFilled,
  info: icons.InfoFilled
};
const ValidateComponentsMap = {
  validating: icons.Loading,
  success: icons.CircleCheck,
  error: icons.CircleClose
};

exports.CloseComponents = CloseComponents;
exports.TypeComponents = TypeComponents;
exports.TypeComponentsMap = TypeComponentsMap;
exports.ValidateComponentsMap = ValidateComponentsMap;
exports.iconPropType = iconPropType;
//# sourceMappingURL=icon.js.map
