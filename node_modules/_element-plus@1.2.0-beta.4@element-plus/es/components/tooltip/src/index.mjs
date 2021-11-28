import { defineComponent, ref, h, cloneVNode } from 'vue';
import _Popper from '../../popper/index.mjs';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { throwError } from '../../../utils/error.mjs';
import { getFirstValidNode } from '../../../utils/vnode.mjs';
import popperDefaultProps from '../../popper/src/use-popper/defaults.mjs';

var Tooltip = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper: _Popper
  },
  props: {
    ...popperDefaultProps,
    manual: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      validator: (val) => {
        return typeof val === "boolean";
      },
      default: void 0
    },
    openDelay: {
      type: Number,
      default: 0
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: [String, Number],
      default: "0"
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    if (props.manual && typeof props.modelValue === "undefined") {
      throwError("[ElTooltip]", "You need to pass a v-model to el-tooltip when `manual` is true");
    }
    const popper = ref(null);
    const onUpdateVisible = (val) => {
      ctx.emit(UPDATE_MODEL_EVENT, val);
    };
    const updatePopper = () => {
      return popper.value.update();
    };
    return {
      popper,
      onUpdateVisible,
      updatePopper
    };
  },
  render() {
    const {
      $slots,
      content,
      manual,
      openDelay,
      onUpdateVisible,
      showAfter,
      visibleArrow,
      modelValue,
      tabindex
    } = this;
    const throwErrorTip = () => {
      throwError("[ElTooltip]", "you need to provide a valid default slot.");
    };
    const popper = h(_Popper, {
      ...Object.keys(popperDefaultProps).reduce((result, key) => {
        return { ...result, [key]: this[key] };
      }, {}),
      ref: "popper",
      manualMode: manual,
      showAfter: openDelay || showAfter,
      showArrow: visibleArrow,
      visible: modelValue,
      "onUpdate:visible": onUpdateVisible
    }, {
      default: () => $slots.content ? $slots.content() : content,
      trigger: () => {
        if ($slots.default) {
          const firstVnode = getFirstValidNode($slots.default(), 1);
          if (!firstVnode)
            throwErrorTip();
          return cloneVNode(firstVnode, { tabindex }, true);
        }
        throwErrorTip();
      }
    });
    return popper;
  }
});

export { Tooltip as default };
//# sourceMappingURL=index.mjs.map
