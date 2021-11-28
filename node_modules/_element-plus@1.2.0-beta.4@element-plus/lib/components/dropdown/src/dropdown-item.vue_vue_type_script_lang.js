'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var props = require('../../../utils/props.js');
var useDropdown = require('./useDropdown.js');

var script = vue.defineComponent({
  name: "ElDropdownItem",
  components: { ElIcon: index.ElIcon },
  props: props.buildProps({
    command: {
      type: [Object, String, Number],
      default: () => ({})
    },
    disabled: Boolean,
    divided: Boolean,
    icon: {
      type: props.definePropType([String, Object])
    }
  }),
  setup(props) {
    const { elDropdown } = useDropdown.useDropdown();
    const _instance = vue.getCurrentInstance();
    function handleClick(e) {
      var _a, _b;
      if (props.disabled) {
        e.stopImmediatePropagation();
        return;
      }
      if (elDropdown.hideOnClick.value) {
        (_a = elDropdown.handleClick) == null ? void 0 : _a.call(elDropdown);
      }
      (_b = elDropdown.commandHandler) == null ? void 0 : _b.call(elDropdown, props.command, _instance, e);
    }
    return {
      handleClick
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=dropdown-item.vue_vue_type_script_lang.js.map
