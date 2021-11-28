'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var constants = require('../../../utils/constants.js');
var useCheckbox = require('./useCheckbox.js');

var script = vue.defineComponent({
  name: "ElCheckboxButton",
  props: useCheckbox.useCheckboxProps,
  emits: [constants.UPDATE_MODEL_EVENT, "change"],
  setup(props) {
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox.useCheckbox(props);
    const { checkboxGroup } = useCheckbox.useCheckboxGroup();
    const activeStyle = vue.computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : null
      };
    });
    return {
      focus,
      isChecked,
      isDisabled,
      model,
      handleChange,
      activeStyle,
      size
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=checkbox-button.vue_vue_type_script_lang.js.map
