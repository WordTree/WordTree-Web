import { defineComponent, ref, watch, provide } from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../utils/constants.mjs';

var script = defineComponent({
  name: "ElCollapse",
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number],
      default: () => []
    }
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, { emit }) {
    const activeNames = ref([].concat(props.modelValue));
    const setActiveNames = (_activeNames) => {
      activeNames.value = [].concat(_activeNames);
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
    };
    const handleItemClick = (name) => {
      if (props.accordion) {
        setActiveNames((activeNames.value[0] || activeNames.value[0] === 0) && activeNames.value[0] === name ? "" : name);
      } else {
        const _activeNames = activeNames.value.slice(0);
        const index = _activeNames.indexOf(name);
        if (index > -1) {
          _activeNames.splice(index, 1);
        } else {
          _activeNames.push(name);
        }
        setActiveNames(_activeNames);
      }
    };
    watch(() => props.modelValue, () => {
      activeNames.value = [].concat(props.modelValue);
    });
    provide("collapse", {
      activeNames,
      handleItemClick
    });
    return {
      activeNames,
      setActiveNames,
      handleItemClick
    };
  }
});

export { script as default };
//# sourceMappingURL=collapse.vue_vue_type_script_lang.mjs.map
