import { defineComponent } from 'vue';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import { useCheckbox } from './useCheckbox.mjs';

var script = defineComponent({
  name: "ElCheckbox",
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: () => void 0
    },
    label: {
      type: [String, Boolean, Number, Object]
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
      default: void 0
    },
    trueLabel: {
      type: [String, Number],
      default: void 0
    },
    falseLabel: {
      type: [String, Number],
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    controls: {
      type: String,
      default: void 0
    },
    border: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    tabindex: [String, Number]
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props) {
    return useCheckbox(props);
  }
});

export { script as default };
//# sourceMappingURL=checkbox.vue_vue_type_script_lang.mjs.map
