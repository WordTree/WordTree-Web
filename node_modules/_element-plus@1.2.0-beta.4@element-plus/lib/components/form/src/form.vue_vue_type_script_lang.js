'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index.js');
var error = require('../../../utils/error.js');
var form = require('../../../tokens/form.js');

function useFormLabelWidth() {
  const potentialLabelWidthArr = vue.ref([]);
  const autoLabelWidth = vue.computed(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    if (index === -1) {
      error.debugWarn("Form", `unexpected width ${width}`);
    }
    return index;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val);
    index > -1 && potentialLabelWidthArr.value.splice(index, 1);
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
var script = vue.defineComponent({
  name: "ElForm",
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    labelSuffix: {
      type: String,
      default: ""
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    },
    scrollToError: Boolean
  },
  emits: ["validate"],
  setup(props, { emit }) {
    const fields = [];
    vue.watch(() => props.rules, () => {
      fields.forEach((field) => {
        field.evaluateValidationEnabled();
      });
      if (props.validateOnRuleChange) {
        validate(() => ({}));
      }
    });
    const addField = (field) => {
      if (field) {
        fields.push(field);
      }
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = () => {
      if (!props.model) {
        error.debugWarn("Form", "model is required for resetFields to work.");
        return;
      }
      fields.forEach((field) => {
        field.resetField();
      });
    };
    const clearValidate = (props2 = []) => {
      const fds = props2.length ? typeof props2 === "string" ? fields.filter((field) => props2 === field.prop) : fields.filter((field) => props2.indexOf(field.prop) > -1) : fields;
      fds.forEach((field) => {
        field.clearValidate();
      });
    };
    const validate = (callback) => {
      if (!props.model) {
        error.debugWarn("Form", "model is required for validate to work!");
        return;
      }
      let promise;
      if (typeof callback !== "function") {
        promise = new Promise((resolve, reject) => {
          callback = function(valid2, invalidFields2) {
            if (valid2) {
              resolve(true);
            } else {
              reject(invalidFields2);
            }
          };
        });
      }
      if (fields.length === 0) {
        callback(true);
      }
      let valid = true;
      let count = 0;
      let invalidFields = {};
      let firstInvalidFields;
      for (const field of fields) {
        field.validate("", (message, field2) => {
          if (message) {
            valid = false;
            firstInvalidFields || (firstInvalidFields = field2);
          }
          invalidFields = { ...invalidFields, ...field2 };
          if (++count === fields.length) {
            callback(valid, invalidFields);
          }
        });
      }
      if (!valid && props.scrollToError) {
        scrollToField(Object.keys(firstInvalidFields)[0]);
      }
      return promise;
    };
    const validateField = (props2, cb) => {
      props2 = [].concat(props2);
      const fds = fields.filter((field) => props2.indexOf(field.prop) !== -1);
      if (!fields.length) {
        error.debugWarn("Form", "please pass correct props!");
        return;
      }
      fds.forEach((field) => {
        field.validate("", cb);
      });
    };
    const scrollToField = (prop) => {
      fields.forEach((item) => {
        if (item.prop === prop) {
          item.$el.scrollIntoView();
        }
      });
    };
    const elForm = vue.reactive({
      ...vue.toRefs(props),
      resetFields,
      clearValidate,
      validateField,
      emit,
      addField,
      removeField,
      ...useFormLabelWidth()
    });
    vue.provide(form.elFormKey, elForm);
    return {
      validate,
      resetFields,
      clearValidate,
      validateField,
      scrollToField
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=form.vue_vue_type_script_lang.js.map
