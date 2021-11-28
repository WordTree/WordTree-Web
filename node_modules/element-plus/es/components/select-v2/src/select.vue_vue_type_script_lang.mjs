import { defineComponent, vModelText, provide, reactive, toRefs } from 'vue';
import '../../../directives/index.mjs';
import _Popper from '../../popper/index.mjs';
import { ElTag } from '../../tag/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../utils/constants.mjs';
import './select-dropdown.mjs';
import useSelect from './useSelect.mjs';
import { selectV2InjectionKey } from './token.mjs';
import { SelectProps } from './defaults.mjs';
import script$1 from './select-dropdown.vue_vue_type_script_lang.mjs';
import ClickOutside from '../../../directives/click-outside/index.mjs';

var script = defineComponent({
  name: "ElSelectV2",
  components: {
    ElSelectMenu: script$1,
    ElTag,
    ElPopper: _Popper,
    ElIcon
  },
  directives: { ClickOutside, ModelText: vModelText },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const API = useSelect(props, emit);
    provide(selectV2InjectionKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight
      }),
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect
    });
    return API;
  }
});

export { script as default };
//# sourceMappingURL=select.vue_vue_type_script_lang.mjs.map
