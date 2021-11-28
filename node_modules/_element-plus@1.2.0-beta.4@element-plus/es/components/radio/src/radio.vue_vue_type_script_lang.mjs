import { defineComponent, nextTick } from 'vue';
import { radioProps, radioEmits, useRadio } from './radio.mjs';

var script = defineComponent({
  name: "ElRadio",
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit }) {
    const { radioRef, isGroup, focus, size, disabled, tabIndex, modelValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
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

export { script as default };
//# sourceMappingURL=radio.vue_vue_type_script_lang.mjs.map
