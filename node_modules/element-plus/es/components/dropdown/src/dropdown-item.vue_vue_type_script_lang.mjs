import { defineComponent, getCurrentInstance } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import { buildProps, definePropType } from '../../../utils/props.mjs';
import { useDropdown } from './useDropdown.mjs';

var script = defineComponent({
  name: "ElDropdownItem",
  components: { ElIcon },
  props: buildProps({
    command: {
      type: [Object, String, Number],
      default: () => ({})
    },
    disabled: Boolean,
    divided: Boolean,
    icon: {
      type: definePropType([String, Object])
    }
  }),
  setup(props) {
    const { elDropdown } = useDropdown();
    const _instance = getCurrentInstance();
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

export { script as default };
//# sourceMappingURL=dropdown-item.vue_vue_type_script_lang.mjs.map
