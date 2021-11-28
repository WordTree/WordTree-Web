import { buildProps, componentSize } from '../../../utils/props.mjs';
import { isNumber } from '../../../utils/util.mjs';

const inputNumberProps = buildProps({
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: {
    type: Boolean,
    default: false
  },
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
  modelValue: {
    type: Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    values: componentSize
  },
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (val) => val >= 0 && val === parseInt(`${val}`, 10)
  }
});
const inputNumberEmits = {
  change: (prev, cur) => prev !== cur,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  input: (val) => isNumber(val),
  "update:modelValue": (val) => isNumber(val)
};

export { inputNumberEmits, inputNumberProps };
//# sourceMappingURL=input-number.mjs.map
