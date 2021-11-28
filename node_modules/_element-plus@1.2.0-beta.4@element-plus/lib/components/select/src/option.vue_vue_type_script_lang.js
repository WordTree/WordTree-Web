'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useOption = require('./useOption.js');

var script = vue.defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const states = vue.reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption.useOption(props, states);
    const { visible, hover } = vue.toRefs(states);
    const vm = vue.getCurrentInstance().proxy;
    const key = vm.value;
    select.onOptionCreate(vm);
    vue.onBeforeUnmount(() => {
      const { selected } = select;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesExist = select.cachedOptions.has(key);
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      if (doesExist && !doesSelected) {
        select.cachedOptions.delete(key);
      }
      select.onOptionDestroy(key);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }
    return {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=option.vue_vue_type_script_lang.js.map
