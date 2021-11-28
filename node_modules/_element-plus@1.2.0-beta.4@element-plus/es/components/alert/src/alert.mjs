import { TypeComponentsMap } from '../../../utils/icon.mjs';
import { buildProps, keyOf } from '../../../utils/props.mjs';

const alertProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: keyOf(TypeComponentsMap),
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: ["light", "dark"],
    default: "light"
  }
});
const alertEmits = {
  close: (evt) => evt instanceof MouseEvent
};

export { alertEmits, alertProps };
//# sourceMappingURL=alert.mjs.map
