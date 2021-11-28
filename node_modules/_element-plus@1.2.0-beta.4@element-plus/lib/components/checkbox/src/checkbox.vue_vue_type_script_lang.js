'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var constants = require('../../../utils/constants.js');
var validators = require('../../../utils/validators.js');
var useCheckbox = require('./useCheckbox.js');

var script = vue.defineComponent({
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
      validator: validators.isValidComponentSize
    },
    tabindex: [String, Number]
  },
  emits: [constants.UPDATE_MODEL_EVENT, "change"],
  setup(props) {
    return useCheckbox.useCheckbox(props);
  }
});

exports["default"] = script;
//# sourceMappingURL=checkbox.vue_vue_type_script_lang.js.map
