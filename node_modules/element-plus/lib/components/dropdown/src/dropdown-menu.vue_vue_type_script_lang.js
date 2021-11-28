'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../directives/index.js');
var useDropdown = require('./useDropdown.js');
var index = require('../../../directives/click-outside/index.js');

var script = vue.defineComponent({
  name: "ElDropdownMenu",
  directives: {
    ClickOutside: index["default"]
  },
  setup() {
    const { _elDropdownSize, elDropdown } = useDropdown.useDropdown();
    const size = _elDropdownSize.value;
    function show() {
      var _a;
      if (["click", "contextmenu"].includes(elDropdown.trigger.value))
        return;
      (_a = elDropdown.show) == null ? void 0 : _a.call(elDropdown);
    }
    function hide() {
      if (["click", "contextmenu"].includes(elDropdown.trigger.value))
        return;
      _hide();
    }
    function _hide() {
      var _a;
      (_a = elDropdown.hide) == null ? void 0 : _a.call(elDropdown);
    }
    vue.onMounted(() => {
      const dropdownMenu = vue.getCurrentInstance();
      useDropdown.initDropdownDomEvent(dropdownMenu, elDropdown.triggerElm.value, elDropdown.instance);
    });
    return {
      size,
      show,
      hide,
      innerHide: _hide,
      triggerElm: elDropdown.triggerElm
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=dropdown-menu.vue_vue_type_script_lang.js.map
