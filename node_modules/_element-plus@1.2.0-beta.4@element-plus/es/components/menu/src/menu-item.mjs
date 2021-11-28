import { buildProps, definePropType } from '../../../utils/props.mjs';
import '../../../utils/util.mjs';
import { isString } from '@vue/shared';

const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && Array.isArray(item.indexPath)
};

export { menuItemEmits, menuItemProps };
//# sourceMappingURL=menu-item.mjs.map
