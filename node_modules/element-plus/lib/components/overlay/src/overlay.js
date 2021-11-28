'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vnode = require('../../../utils/vnode.js');
require('../../../hooks/index.js');
var props = require('../../../utils/props.js');
var index = require('../../../hooks/use-same-target/index.js');

const overlayProps = props.buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: props.definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: props.definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
var Overlay = vue.defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = index.useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? vue.createVNode("div", {
        class: ["el-overlay", props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [vue.renderSlot(slots, "default")], vnode.PatchFlags.STYLE | vnode.PatchFlags.CLASS | vnode.PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : vue.h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [vue.renderSlot(slots, "default")]);
    };
  }
});

exports["default"] = Overlay;
exports.overlayEmits = overlayEmits;
exports.overlayProps = overlayProps;
//# sourceMappingURL=overlay.js.map
