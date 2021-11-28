import { defineComponent, inject, computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import { selectKey } from './token.mjs';

var script = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectWrapper) == null ? void 0 : _a.getBoundingClientRect().width}px`;
    }
    onMounted(() => {
      addResizeListener(select.selectWrapper, updateMinWidth);
    });
    onBeforeUnmount(() => {
      removeResizeListener(select.selectWrapper, updateMinWidth);
    });
    return {
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});

export { script as default };
//# sourceMappingURL=select-dropdown.vue_vue_type_script_lang.mjs.map
