'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var util = require('../../../utils/util.js');

const SIZE_MAP = {
  mini: 4,
  small: 8,
  medium: 12,
  large: 16
};
function useSpace(props) {
  const classes = vue.computed(() => [
    "el-space",
    `el-space--${props.direction}`,
    props.class
  ]);
  const horizontalSize = vue.ref(0);
  const verticalSize = vue.ref(0);
  const containerStyle = vue.computed(() => {
    const wrapKls = props.wrap || props.fill ? { flexWrap: "wrap", marginBottom: `-${verticalSize.value}px` } : {};
    const alignment = {
      alignItems: props.alignment
    };
    return [wrapKls, alignment, props.style];
  });
  const itemStyle = vue.computed(() => {
    const itemBaseStyle = {
      paddingBottom: `${verticalSize.value}px`,
      marginRight: `${horizontalSize.value}px`
    };
    const fillStyle = props.fill ? { flexGrow: 1, minWidth: `${props.fillRatio}%` } : {};
    return [itemBaseStyle, fillStyle];
  });
  vue.watchEffect(() => {
    const { size = "small", wrap, direction: dir, fill } = props;
    if (Array.isArray(size)) {
      const [h = 0, v = 0] = size;
      horizontalSize.value = h;
      verticalSize.value = v;
    } else {
      let val;
      if (util.isNumber(size)) {
        val = size;
      } else {
        val = SIZE_MAP[size] || SIZE_MAP.small;
      }
      if ((wrap || fill) && dir === "horizontal") {
        horizontalSize.value = verticalSize.value = val;
      } else {
        if (dir === "horizontal") {
          horizontalSize.value = val;
          verticalSize.value = 0;
        } else {
          verticalSize.value = val;
          horizontalSize.value = 0;
        }
      }
    }
  });
  return {
    classes,
    containerStyle,
    itemStyle
  };
}

exports.useSpace = useSpace;
//# sourceMappingURL=use-space.js.map
