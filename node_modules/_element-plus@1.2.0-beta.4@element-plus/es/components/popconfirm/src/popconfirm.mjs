import '../../button/index.mjs';
import { QuestionFilled } from '@element-plus/icons';
import { buildProps, definePropType } from '../../../utils/props.mjs';
import { buttonType } from '../../button/src/button.mjs';

const popconfirmProps = buildProps({
  title: {
    type: String
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonType: {
    type: String,
    values: buttonType,
    default: "primary"
  },
  cancelButtonType: {
    type: String,
    values: buttonType,
    default: "text"
  },
  icon: {
    type: definePropType([String, Object]),
    default: QuestionFilled
  },
  iconColor: {
    type: String,
    default: "#f90"
  },
  hideIcon: {
    type: Boolean,
    default: false
  }
});
const popconfirmEmits = {
  confirm: () => true,
  cancel: () => true
};

export { popconfirmEmits, popconfirmProps };
//# sourceMappingURL=popconfirm.mjs.map
