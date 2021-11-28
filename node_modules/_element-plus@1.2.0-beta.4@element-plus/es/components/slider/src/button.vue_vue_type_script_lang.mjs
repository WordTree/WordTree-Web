import { defineComponent, reactive, toRefs } from 'vue';
import _Tooltip from '../../tooltip/index.mjs';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { useSliderButton } from './useSliderButton.mjs';

var script = defineComponent({
  name: "ElSliderButton",
  components: {
    ElTooltip: _Tooltip
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    vertical: {
      type: Boolean,
      default: false
    },
    tooltipClass: {
      type: String,
      default: ""
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const initData = reactive({
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: props.modelValue
    });
    const {
      tooltip,
      showTooltip,
      tooltipVisible,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onLeftKeyDown,
      onRightKeyDown,
      setPosition
    } = useSliderButton(props, initData, emit);
    const { hovering, dragging } = toRefs(initData);
    return {
      tooltip,
      tooltipVisible,
      showTooltip,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onLeftKeyDown,
      onRightKeyDown,
      setPosition,
      hovering,
      dragging
    };
  }
});

export { script as default };
//# sourceMappingURL=button.vue_vue_type_script_lang.mjs.map
