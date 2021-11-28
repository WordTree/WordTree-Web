import { Close, SuccessFilled, InfoFilled, WarningFilled, CircleCloseFilled, Loading, CircleCheck, CircleClose } from '@element-plus/icons';
import { definePropType } from './props.mjs';

const iconPropType = definePropType([String, Object]);
const CloseComponents = {
  Close
};
const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled
};
const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled
};
const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose
};

export { CloseComponents, TypeComponents, TypeComponentsMap, ValidateComponentsMap, iconPropType };
//# sourceMappingURL=icon.mjs.map
