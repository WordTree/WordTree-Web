import { defineComponent, onMounted, getCurrentInstance } from 'vue';
import '../../../directives/index.mjs';
import { useDropdown, initDropdownDomEvent } from './useDropdown.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';

var script = defineComponent({
  name: "ElDropdownMenu",
  directives: {
    ClickOutside
  },
  setup() {
    const { _elDropdownSize, elDropdown } = useDropdown();
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
    onMounted(() => {
      const dropdownMenu = getCurrentInstance();
      initDropdownDomEvent(dropdownMenu, elDropdown.triggerElm.value, elDropdown.instance);
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

export { script as default };
//# sourceMappingURL=dropdown-menu.vue_vue_type_script_lang.mjs.map
