'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var constants = require('../../../utils/constants.js');

var script = vue.defineComponent({
  name: "ElCollapse",
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number],
      default: () => []
    }
  },
  emits: [constants.UPDATE_MODEL_EVENT, constants.CHANGE_EVENT],
  setup(props, { emit }) {
    const activeNames = vue.ref([].concat(props.modelValue));
    const setActiveNames = (_activeNames) => {
      activeNames.value = [].concat(_activeNames);
      const value = props.accordion ? activeNames.value[0] : activeNames.value;
      emit(constants.UPDATE_MODEL_EVENT, value);
      emit(constants.CHANGE_EVENT, value);
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
    vue.watch(() => props.modelValue, () => {
      activeNames.value = [].concat(props.modelValue);
    });
    vue.provide("collapse", {
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

exports["default"] = script;
//# sourceMappingURL=collapse.vue_vue_type_script_lang.js.map
