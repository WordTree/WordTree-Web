'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useOption = require('./useOption.js');
var defaults = require('./defaults.js');

var script = vue.defineComponent({
  props: defaults.OptionProps,
  emits: ["select", "hover"],
  setup(props, { emit }) {
    const { hoverItem, selectOptionClick } = useOption.useOption(props, { emit });
    return {
      hoverItem,
      selectOptionClick
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=option-item.vue_vue_type_script_lang.js.map
