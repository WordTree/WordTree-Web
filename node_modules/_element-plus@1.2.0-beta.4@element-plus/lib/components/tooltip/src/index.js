'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../popper/index.js');
var constants = require('../../../utils/constants.js');
var error = require('../../../utils/error.js');
var vnode = require('../../../utils/vnode.js');
var defaults = require('../../popper/src/use-popper/defaults.js');

var Tooltip = vue.defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper: index["default"]
  },
  props: {
    ...defaults["default"],
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
  emits: [constants.UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    if (props.manual && typeof props.modelValue === "undefined") {
      error.throwError("[ElTooltip]", "You need to pass a v-model to el-tooltip when `manual` is true");
    }
    const popper = vue.ref(null);
    const onUpdateVisible = (val) => {
      ctx.emit(constants.UPDATE_MODEL_EVENT, val);
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
      error.throwError("[ElTooltip]", "you need to provide a valid default slot.");
    };
    const popper = vue.h(index["default"], {
      ...Object.keys(defaults["default"]).reduce((result, key) => {
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
          const firstVnode = vnode.getFirstValidNode($slots.default(), 1);
          if (!firstVnode)
            throwErrorTip();
          return vue.cloneVNode(firstVnode, { tabindex }, true);
        }
        throwErrorTip();
      }
    });
    return popper;
  }
});

exports["default"] = Tooltip;
//# sourceMappingURL=index.js.map
