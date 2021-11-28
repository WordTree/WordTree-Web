'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const checkTagProps = {
  checked: {
    type: Boolean,
    default: false
  }
};
var script = vue.defineComponent({
  name: "ElCheckTag",
  props: checkTagProps,
  emits: ["change", "update:checked"],
  setup(props, { emit }) {
    const onChange = () => {
      const checked = !props.checked;
      emit("change", checked);
      emit("update:checked", checked);
    };
    return {
      onChange
    };
  }
});

exports.checkTagProps = checkTagProps;
exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
