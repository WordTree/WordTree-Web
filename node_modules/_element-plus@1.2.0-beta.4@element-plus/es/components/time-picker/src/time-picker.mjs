import { defineComponent, ref, provide, h } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DEFAULT_FORMATS_TIME } from './common/constant.mjs';
import './common/picker.mjs';
import './time-picker-com/panel-time-pick.mjs';
import './time-picker-com/panel-time-range.mjs';
import { timePickerDefaultProps } from './common/props.mjs';
import script from './time-picker-com/panel-time-range.vue_vue_type_script_lang.mjs';
import script$1 from './time-picker-com/panel-time-pick.vue_vue_type_script_lang.mjs';
import script$2 from './common/picker.vue_vue_type_script_lang.mjs';

dayjs.extend(customParseFormat);
var TimePicker = defineComponent({
  name: "ElTimePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    isRange: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const commonPicker = ref(null);
    const type = props.isRange ? "timerange" : "time";
    const panel = props.isRange ? script : script$1;
    const refProps = {
      ...props,
      focus: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleFocus();
      },
      blur: () => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleBlur();
      }
    };
    provide("ElPopperOptions", props.popperOptions);
    ctx.expose(refProps);
    return () => {
      var _a;
      const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_TIME;
      return h(script$2, {
        ...props,
        format,
        type,
        ref: commonPicker,
        "onUpdate:modelValue": (value) => ctx.emit("update:modelValue", value)
      }, {
        default: (scopedProps) => h(panel, scopedProps)
      });
    };
  }
});

export { TimePicker as default };
//# sourceMappingURL=time-picker.mjs.map
