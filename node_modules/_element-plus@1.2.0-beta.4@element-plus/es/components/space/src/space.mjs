import { isVNode, defineComponent, renderSlot, createVNode, createTextVNode } from 'vue';
import { isString, isArray } from '@vue/shared';
import { isFragment, PatchFlags, isValidElementNode } from '../../../utils/vnode.mjs';
import { isNumber } from '../../../utils/util.mjs';
import { buildProps, definePropType, componentSize } from '../../../utils/props.mjs';
import './item.mjs';
import { useSpace } from './use-space.mjs';
import script from './item.vue_vue_type_script_lang.mjs';

const spaceProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  class: {
    type: definePropType([
      String,
      Object,
      Array
    ]),
    default: ""
  },
  style: {
    type: definePropType([String, Array, Object]),
    default: ""
  },
  alignment: {
    type: definePropType(String),
    default: "center"
  },
  prefixCls: {
    type: String
  },
  spacer: {
    type: definePropType([Object, String, Number, Array]),
    default: null,
    validator: (val) => isVNode(val) || isNumber(val) || isString(val)
  },
  wrap: {
    type: Boolean,
    default: false
  },
  fill: {
    type: Boolean,
    default: false
  },
  fillRatio: {
    type: Number,
    default: 100
  },
  size: {
    type: [String, Array, Number],
    values: componentSize,
    validator: (val) => {
      return isNumber(val) || isArray(val) && val.length === 2 && val.every((i) => isNumber(i));
    }
  }
});
var Space = defineComponent({
  name: "ElSpace",
  props: spaceProps,
  setup(props, { slots }) {
    const { classes, containerStyle, itemStyle } = useSpace(props);
    return () => {
      var _a;
      const { spacer, prefixCls, direction } = props;
      const children = renderSlot(slots, "default", { key: 0 }, () => []);
      if (((_a = children.children) != null ? _a : []).length === 0)
        return null;
      if (isArray(children.children)) {
        let extractedChildren = [];
        children.children.forEach((child, loopKey) => {
          if (isFragment(child)) {
            if (isArray(child.children)) {
              child.children.forEach((nested, key) => {
                extractedChildren.push(createVNode(script, {
                  style: itemStyle.value,
                  prefixCls,
                  key: `nested-${key}`
                }, {
                  default: () => [nested]
                }, PatchFlags.PROPS | PatchFlags.STYLE, ["style", "prefixCls"]));
              });
            }
          } else if (isValidElementNode(child)) {
            extractedChildren.push(createVNode(script, {
              style: itemStyle.value,
              prefixCls,
              key: `LoopKey${loopKey}`
            }, {
              default: () => [child]
            }, PatchFlags.PROPS | PatchFlags.STYLE, ["style", "prefixCls"]));
          }
        });
        if (spacer) {
          const len = extractedChildren.length - 1;
          extractedChildren = extractedChildren.reduce((acc, child, idx) => {
            const children2 = [...acc, child];
            if (idx !== len) {
              children2.push(createVNode("span", {
                style: [
                  itemStyle.value,
                  direction === "vertical" ? "width: 100%" : null
                ],
                key: idx
              }, [
                isVNode(spacer) ? spacer : createTextVNode(spacer, PatchFlags.TEXT)
              ], PatchFlags.STYLE));
            }
            return children2;
          }, []);
        }
        return createVNode("div", {
          class: classes.value,
          style: containerStyle.value
        }, extractedChildren, PatchFlags.STYLE | PatchFlags.CLASS);
      }
      return children.children;
    };
  }
});

export { Space as default, spaceProps };
//# sourceMappingURL=space.mjs.map
