import { computed, ref, watchEffect } from 'vue';
import { isNumber } from '../../../utils/util.mjs';

const SIZE_MAP = {
  mini: 4,
  small: 8,
  medium: 12,
  large: 16
};
function useSpace(props) {
  const classes = computed(() => [
    "el-space",
    `el-space--${props.direction}`,
    props.class
  ]);
  const horizontalSize = ref(0);
  const verticalSize = ref(0);
  const containerStyle = computed(() => {
    const wrapKls = props.wrap || props.fill ? { flexWrap: "wrap", marginBottom: `-${verticalSize.value}px` } : {};
    const alignment = {
      alignItems: props.alignment
    };
    return [wrapKls, alignment, props.style];
  });
  const itemStyle = computed(() => {
    const itemBaseStyle = {
      paddingBottom: `${verticalSize.value}px`,
      marginRight: `${horizontalSize.value}px`
    };
    const fillStyle = props.fill ? { flexGrow: 1, minWidth: `${props.fillRatio}%` } : {};
    return [itemBaseStyle, fillStyle];
  });
  watchEffect(() => {
    const { size = "small", wrap, direction: dir, fill } = props;
    if (Array.isArray(size)) {
      const [h = 0, v = 0] = size;
      horizontalSize.value = h;
      verticalSize.value = v;
    } else {
      let val;
      if (isNumber(size)) {
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

export { useSpace };
//# sourceMappingURL=use-space.mjs.map
