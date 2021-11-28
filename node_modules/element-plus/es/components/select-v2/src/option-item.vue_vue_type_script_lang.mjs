import { defineComponent } from 'vue';
import { useOption } from './useOption.mjs';
import { OptionProps } from './defaults.mjs';

var script = defineComponent({
  props: OptionProps,
  emits: ["select", "hover"],
  setup(props, { emit }) {
    const { hoverItem, selectOptionClick } = useOption(props, { emit });
    return {
      hoverItem,
      selectOptionClick
    };
  }
});

export { script as default };
//# sourceMappingURL=option-item.vue_vue_type_script_lang.mjs.map
