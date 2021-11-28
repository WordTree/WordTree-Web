'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var vnode = require('../../../utils/vnode.js');
var util = require('../../../utils/util.js');
var props = require('../../../utils/props.js');
require('./item.js');
var useSpace = require('./use-space.js');
var item_vue_vue_type_script_lang = require('./item.vue_vue_type_script_lang.js');

const spaceProps = props.buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  class: {
    type: props.definePropType([
      String,
      Object,
      Array
    ]),
    default: ""
  },
  style: {
    type: props.definePropType([String, Array, Object]),
    default: ""
  },
  alignment: {
    type: props.definePropType(String),
    default: "center"
  },
  prefixCls: {
    type: String
  },
  spacer: {
    type: props.definePropType([Object, String, Number, Array]),
    default: null,
    validator: (val) => vue.isVNode(val) || util.isNumber(val) || shared.isString(val)
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
    values: props.componentSize,
    validator: (val) => {
      return util.isNumber(val) || shared.isArray(val) && val.length === 2 && val.every((i) => util.isNumber(i));
    }
  }
});
var Space = vue.defineComponent({
  name: "ElSpace",
  props: spaceProps,
  setup(props, { slots }) {
    const { classes, containerStyle, itemStyle } = useSpace.useSpace(props);
    return () => {
      var _a;
      const { spacer, prefixCls, direction } = props;
      const children = vue.renderSlot(slots, "default", { key: 0 }, () => []);
      if (((_a = children.children) != null ? _a : []).length === 0)
        return null;
      if (shared.isArray(children.children)) {
        let extractedChildren = [];
        children.children.forEach((child, loopKey) => {
          if (vnode.isFragment(child)) {
            if (shared.isArray(child.children)) {
              child.children.forEach((nested, key) => {
                extractedChildren.push(vue.createVNode(item_vue_vue_type_script_lang["default"], {
                  style: itemStyle.value,
                  prefixCls,
                  key: `nested-${key}`
                }, {
                  default: () => [nested]
                }, vnode.PatchFlags.PROPS | vnode.PatchFlags.STYLE, ["style", "prefixCls"]));
              });
            }
          } else if (vnode.isValidElementNode(child)) {
            extractedChildren.push(vue.createVNode(item_vue_vue_type_script_lang["default"], {
              style: itemStyle.value,
              prefixCls,
              key: `LoopKey${loopKey}`
            }, {
              default: () => [child]
            }, vnode.PatchFlags.PROPS | vnode.PatchFlags.STYLE, ["style", "prefixCls"]));
          }
        });
        if (spacer) {
          const len = extractedChildren.length - 1;
          extractedChildren = extractedChildren.reduce((acc, child, idx) => {
            const children2 = [...acc, child];
            if (idx !== len) {
              children2.push(vue.createVNode("span", {
                style: [
                  itemStyle.value,
                  direction === "vertical" ? "width: 100%" : null
                ],
                key: idx
              }, [
                vue.isVNode(spacer) ? spacer : vue.createTextVNode(spacer, vnode.PatchFlags.TEXT)
              ], vnode.PatchFlags.STYLE));
            }
            return children2;
          }, []);
        }
        return vue.createVNode("div", {
          class: classes.value,
          style: containerStyle.value
        }, extractedChildren, vnode.PatchFlags.STYLE | vnode.PatchFlags.CLASS);
      }
      return children.children;
    };
  }
});

exports["default"] = Space;
exports.spaceProps = spaceProps;
//# sourceMappingURL=space.js.map
