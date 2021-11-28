'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var radio = require('./radio.js');

var script = vue.defineComponent({
  name: "ElRadio",
  props: radio.radioProps,
  emits: radio.radioEmits,
  setup(props, { emit }) {
    const { radioRef, isGroup, focus, size, disabled, tabIndex, modelValue } = radio.useRadio(props, emit);
    function handleChange() {
      vue.nextTick(() => emit("change", modelValue.value));
    }
    return {
      focus,
      isGroup,
      modelValue,
      tabIndex,
      size,
      disabled,
      radioRef,
      handleChange
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=radio.vue_vue_type_script_lang.js.map
