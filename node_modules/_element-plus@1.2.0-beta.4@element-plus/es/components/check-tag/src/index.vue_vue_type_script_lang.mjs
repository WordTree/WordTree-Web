import { defineComponent } from 'vue';

const checkTagProps = {
  checked: {
    type: Boolean,
    default: false
  }
};
var script = defineComponent({
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

export { checkTagProps, script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
